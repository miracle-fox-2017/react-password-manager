import { createStore, combineReducers } from 'redux'
import homeReducers from './reducers/homeReducers'

const appReducers = combineReducers({
  homeReducers
})

const store = createStore(appReducers)

export default store