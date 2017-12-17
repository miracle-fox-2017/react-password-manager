import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import home from './reducers/home'
import navbar from './reducers/navbar'

const appReducers = combineReducers({
  home,
  navbar
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(logger, thunk)

const store = createStore(appReducers, middleware)

export default store