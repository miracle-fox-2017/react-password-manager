var initialState = {
  passwordlist: []
}

const passwordlistReducer = (state = initialState, action) => {
  console.log('ini dari reducer', action)
  switch(action.type) {
    case 'GET_PASSWORD_LIST':
      state.passwordlist = action.payload.passwordlist
      return {...state}
    default:
      return state
  }
}

export default passwordlistReducer
