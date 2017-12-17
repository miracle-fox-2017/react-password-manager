import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import pmApp from '../reducers'

export const store = createStore(pmApp, applyMiddleware(thunk))