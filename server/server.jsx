import Express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'

// Webpack Requirements
import webpack from 'webpack'
import webpackConfig from '../webpack.config.dev'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

// Initialize the Express App
const app = new Express()

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
}

// React And Redux Setup
import React from 'react' // eslint-disable-line no-unused-vars
import { renderToString } from 'react-dom/server'
import { configureStore } from '../client/redux/stores/configureStore'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'

// Import required modules
import routes from '../client/routes'
import { fetchComponentData } from './util/fetchData'
// import posts from '../api/routes/post.routes'
// import dummyData from '../api/dummyData'
import config from './config'

// MongoDB Connection
mongoose.connect(config.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!') // eslint-disable-line no-console
    throw error
  }

  // feed some dummy data in DB.
  // dummyData()
})

app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }))
app.use(Express.static(path.resolve(__dirname, '../public')))
// app.use('/api', api)

// Render Initial HTML
const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Stair Climb Tracker</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/app.js"></script>
      </body>
    </html>
  `
}

// Server Side Rendering based on routes matched by React-router.
app.use((req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err)      return res.status(500).end('Internal server error')
    if (redirect) return res.redirect(redirect.pathname + redirect.search)
    if (!props)   return res.status(404).end('Not found!')

    const store = configureStore({ posts: [], post: {} })

    fetchComponentData(store.dispatch, props.components, props.params)
      .then(() => {
        const html = renderToString(
          <Provider store={store}>
            <RouterContext {...props} />
          </Provider>
        )

        res.status(200).end(renderFullPage(html, store.getState()))
      })
      .catch(() => {
        res.end(renderFullPage('Error', {}))
      })
  })
})

// start app
app.listen(config.port, (error) => {
  if (!error) {
    console.log(`Running on port ${config.port}`) // eslint-disable-line
  }
})

export default app
