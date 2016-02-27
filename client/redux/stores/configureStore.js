import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer'
import DevTools from '../../components/DevTools'

const reduxDevTools = () => {
  return (typeof window === 'object' && window.devToolsExtension)
    ? window.devToolsExtension()
    : DevTools.instrument()
}

export default function configureStore(initialState = {}) {
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    reduxDevTools()
  ))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
      const nextReducer = require('../reducer')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
