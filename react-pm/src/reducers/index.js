import { ADD_DATA, GET_ALL_DATA } from '../actions'

const initialState = {
  userData: {}
}

function pmApp(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return state
    case GET_ALL_DATA:
      return {
        ...state,
        userData: action.payload
      }
    default:
      return state
  }
}

export default pmApp
