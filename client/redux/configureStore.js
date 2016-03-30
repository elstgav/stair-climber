import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer  from '_/client/redux/reducer'

const reduxDevTools = () => {
  return (typeof window === 'object' && window.devToolsExtension)
    ? window.devToolsExtension()
    : fn => fn
}

export default function configureStore(initialState = {}) {
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    reduxDevTools()
  ))

  if (process.env.NODE_ENV == 'development' && module.hot) {
    module.hot.accept(
      './reducer',
      () => store.replaceReducer(require('./reducer'))
    )
  }

  return store
}

