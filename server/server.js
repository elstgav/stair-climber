import path from 'path'

import Express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'

import config from '_/config'
import * as hotLoading from './initializers/hotLoading'
import * as database   from './initializers/database'

// import posts from '../api/routes/post.routes'

// React And Redux Setup
import React from 'react'
import ReactDOM from 'react-dom/server'
import initStore from '_/client/redux/initStore'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'

import routes from '_/client/routes'
import { fetchComponentData } from './util/fetchComponentData'
import HTML from './helpers/HTML'

const app = new Express()

hotLoading.init(app)
database.init(app)

app.use(compression())
app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }))
app.use(Express.static(path.resolve(__dirname, '../public')))
// app.use('/api', posts)


// Server Side Rendering based on routes matched by React-router.
app.use((req, res) => {
  match({ routes, location: req.url }, (error, redirect, props) => {
    if (error)    return res.status(500).end('Internal server error')
    if (!props)   return res.status(404).end('Not found!')
    if (redirect) return res.redirect(redirect.pathname + redirect.search)

    const store = initStore()

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
app.listen(config.port, (error) => {
  if (!error) {
    console.log(`Listening on localhost:${config.port}`) // eslint-disable-line
  }
})

export default app
