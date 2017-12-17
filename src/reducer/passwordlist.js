var initialState = {
  passwordlist: []
}

const passwordlistReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_PASSWORD_LIST':
      state.passwordlist = action.payload.passwordlist
      return {...state}
    case 'SEARCH_PASSWORD':
      state.passwordlist = action.payload.search
      return {...state}
    default:
      return state
  }
}

export default passwordlistReducer
