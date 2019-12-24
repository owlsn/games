import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import todoApp from '../redux/reducers/index'
import logger from './logger'

const nextReducer = require('../redux/reducers/index')

export default function configure(initialState) {
  // console.log('initialState', initialState)
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    logger
    // router,
  )(create)

  const store = createStoreWithMiddleware(todoApp, initialState)

  if (module.hot) {
    module.hot.accept('../redux/reducers/index', () => {
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
