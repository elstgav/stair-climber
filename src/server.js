import path from 'path'

import Express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import session from 'express-session'
const RedisStore = require('connect-redis')(session);
const redisOptions = {
  client: require('redis').createClient(process.env.REDIS_URL),
  disableTTL: true,
}

import Config from 'src/config'
import HotLoader from 'src/lib/HotLoader'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'

import routes from 'src/routes'
import Html from 'src/lib/Html'
import { signIn, logOut } from 'src/lib/server/account'
import { DataWrapper } from 'src/components'

const app = new Express()

HotLoader.init(app)

app.use(compression())

app.use(session({
  store: new RedisStore(redisOptions),
  secret: 'keyboard cat',
}))

app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }))
// app.use(favicon(path.resolve(__dirname, '../public/favicon.ico')))
app.use(Express.static(path.resolve(__dirname, '../public')))


app.post('/account/login', signIn)

app.get('/account/logout', logOut)

// Server Side Rendering based on routes matched by React-router.
app.use((req, res) => {
  console.log(`receiving request: ${req.url}`)
  const currentUser = req.session.currentUser

  if (currentUser && req.url === '/account') {
    return res.redirect('/')
  }

  if (!currentUser && req.url !== '/account') {
    return res.redirect('/account')
  }


  match({ routes, location: req.url }, (error, redirect, props) => {
    if (error)    return res.status(500).end('Internal server error')
    if (!props)   return res.status(404).end('Not found!')
    if (redirect) return res.redirect(redirect.pathname + redirect.search)
    return res.status(200).send(
      `<!doctype html>
      ${renderToString(<Html
        content={<DataWrapper data={{ currentUser }}>
          <RouterContext {...props} /></DataWrapper>}
      />)}`
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
