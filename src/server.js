import path from 'path'

import Express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
// import favicon from 'serve-favicon'

import Config from '_/src/config'
import HotLoader from '_/src/lib/HotLoader'

// React And Redux Setup
import React from 'react'
import ReactDOM from 'react-dom/server'
import configureStore from '_/src/lib/configureStore'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'

import routes from '_/src/routes'
import { fetchComponentData } from '_/src/lib/fetchComponentData'
import HTML from '_/src/lib/HTML'

const app = new Express()

HotLoader.init(app)

app.use(compression())
app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }))
// app.use(favicon(path.resolve(__dirname, '../public/favicon.ico')))
app.use(Express.static(path.resolve(__dirname, '../public')))


// Server Side Rendering based on routes matched by React-router.
app.use((req, res) => {
  match({ routes, location: req.url }, (error, redirect, props) => {
    if (error)    return res.status(500).end('Internal server error')
    if (!props)   return res.status(404).end('Not found!')
    if (redirect) return res.redirect(redirect.pathname + redirect.search)

    const store = configureStore()

    fetchComponentData(store.dispatch, props.components, props.params)
      .then(() => {
        const component = (
          <Provider store={store} key='provider'>
            <RouterContext {...props} />
          </Provider>
        )

        res.status(200).send(
          '<!doctype html>\n' +
          ReactDOM.renderToString(
            <HTML content={component} store={store}/>
          )
        )
      })
      .catch(() => {
        console.log('Unable to fetch data store') // eslint-disable-line
        res.status(500).end('Internal server error')
      })
  })
})

// start app
app.listen(Config.port, (error) => {
  if (!error) {
    console.log(`Listening on ${Config.host}:${Config.port}`) // eslint-disable-line
  }
})

export default app
