import { createStore, combineReducers } from 'redux'
import home from './reducers/home'
import navbar from './reducers/navbar'

const appReducers = combineReducers({
  home,
  navbar
})

const store = createStore(appReducers)

export default store