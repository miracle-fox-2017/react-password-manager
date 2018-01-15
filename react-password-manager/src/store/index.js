import { createStore, applyMiddleware } from 'redux'
import reducerManager from '../reducer/reducerManager'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middleware = applyMiddleware(thunk, logger)
let store = createStore(reducerManager, middleware)

export default store