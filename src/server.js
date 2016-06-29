import path from 'path'

import Express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'

import Config from 'src/config'
import HotLoader from 'src/lib/HotLoader'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'

import routes from 'src/routes'
import Html from 'src/lib/Html'

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
    return res.status(200).send(
      `<!doctype html>
      ${renderToString(<Html content={<RouterContext {...props} />} />)}`
    )
  })
})

// start app
app.listen(Config.port, (error) => {
  if (!error) {
    console.log(`Listening on ${Config.host}:${Config.port}`) // eslint-disable-line
  }
})

export default app
