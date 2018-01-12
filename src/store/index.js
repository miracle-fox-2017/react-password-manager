import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import contactReducer from '../reducer/index.js'

const store = createStore(contactReducer, applyMiddleware(thunk))

export default store