const allContacts = []

const usersReducer = (state = allContacts, actions) => {
  console.log('userReducers', actions);
  switch (actions.type) {
    case 'GET_ALL_USERS':
      return state.concat(actions.payload)
    default:
      return state
  }
}

export default usersReducer