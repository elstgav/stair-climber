import path from 'path'

import Express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'

import config from './config'
import * as hotLoading from './initializers/hotLoading'
import * as database from './initializers/database'

// import posts from '../api/routes/post.routes'

// React And Redux Setup
import React from 'react' // eslint-disable-line no-unused-vars
import { renderToString } from 'react-dom/server'
import { configureStore } from '../client/redux/stores/configureStore'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'

import routes from '../client/routes'
import { fetchComponentData } from './util/fetchComponentData'


const app = new Express()

hotLoading.init(app)
database.init(app)

app.use(compression())
app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }))
app.use(Express.static(path.resolve(__dirname, '../public')))
// app.use('/api', posts)


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
