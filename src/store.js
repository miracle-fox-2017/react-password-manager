import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import home from './reducers/home'

const appReducers = combineReducers({
  home
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(logger, thunk)

const store = createStore(appReducers, composeEnhancers(middleware))

export default store