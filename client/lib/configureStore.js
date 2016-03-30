import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer  from '_/client/reducers'

const reduxDevTools = () => {
  return (typeof window === 'object' && window.devToolsExtension)
    ? window.devToolsExtension()
    : fn => fn
}

export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    reduxDevTools()
  ))

  if (process.env.NODE_ENV == 'development' && module.hot) {
    module.hot.accept(
      '../reducers',
      () => store.replaceReducer(require('../reducers'))
    )
  }

  return store
}

