import React from 'react'
import routes from './routes'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import initStore from './redux/initStore'

const store = initStore(window.__INITIAL_STATE__)
const dest = document.getElementById('app')

render((
  <Provider store={store} key="provider">
    <Router history={browserHistory} routes={routes} />
  </Provider>
), dest)

if (process.env.NODE_ENV !== 'production') {
  window.React = React // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.') // eslint-disable-line
  }
}
