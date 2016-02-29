import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer  from '_/client/redux/reducer'

const reduxDevTools = () => {
  return (typeof window === 'object' && window.devToolsExtension)
    ? window.devToolsExtension()
    : fn => fn
}

export default function initStore(initialState = {}) {
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    reduxDevTools()
  ))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

