const initialState = {
  users: []
}
export const allUsers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return state.users = action.allusers
    default:
      return state
  }
}