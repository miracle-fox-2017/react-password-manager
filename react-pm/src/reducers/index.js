import { ADD_DATA, GET_ALL_DATA } from '../actions'

const initialState = {}

function pmApp(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return state
    case GET_ALL_DATA:
      return state
    default:
      return state
  }
}

export default pmApp
