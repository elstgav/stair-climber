import React from 'react'
import routes from './routes'
import DevTools from './components/DevTools'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { configureStore } from './redux/stores/configureStore'

const store = configureStore(window.__INITIAL_STATE__)
const dest = document.getElementById('root')

render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
), dest)

if (process.env.NODE_ENV !== 'production') {
  window.React = React // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.') // eslint-disable-line
  }
}

if (process.env.NODE_ENV == 'development' && !window.devToolsExtension) {
  render((
    <Provider store={store} key="provider">
      <div>
        <Router history={browserHistory} routes={routes} />
        <DevTools />
      </div>
    </Provider>
  ), dest)
}
