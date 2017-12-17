const initialState = {
  users: []
}
export const allUsers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      state.users = action.allusers
      return {...state}
    case 'SEARCH_USERS':
      state.users = action.allusers
      return {...state}
    default:
      return state
  }
}