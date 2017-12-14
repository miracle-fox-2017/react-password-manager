import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import listReducer from './reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = applyMiddleware (logger,thunk)
//STORE
const store = createStore(listReducer, middleware)
export default store
