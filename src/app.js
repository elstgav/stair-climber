import React from 'react'
import routes from './routes'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

require('./stylesheets/main.scss')

const dest = document.getElementById('app')

render((
  <Router history={browserHistory} routes={routes} />
), dest)

if (process.env.NODE_ENV !== 'production') {
  window.React = React // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) { // eslint-disable-line
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.') // eslint-disable-line
  }
}
