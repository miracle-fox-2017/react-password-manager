var initialState = {
  passwordlist: []
}

const passwordlistReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_PASSWORD_LIST':
      state.passwordlist = action.payload.passwordlist
      return {...state}
    case 'SEARCH_PASSWORD':
      var regex = new RegExp(action.payload.search, 'i')
      var baru = Object.keys(state.passwordlist).filter((key) => {
        return regex.test(state.passwordlist[key].URL)
      }).map((kunci) => {
        return state.passwordlist[kunci]
      })

      state.passwordlist = baru

      return {...state}
    default:
      return state
  }
}

export default passwordlistReducer
