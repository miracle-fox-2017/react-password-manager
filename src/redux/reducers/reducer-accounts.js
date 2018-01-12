const initialState = {
  loggedin : 'tomybudiman',
  accounts : []
}

const reducer = (state=initialState,action) => {
  switch (action.type) {
    case 'SET_ACCOUNT_LIST':
      return {...state,accounts:state.accounts.concat(action.accounts)}
    case 'ADD_ACCOUNT':
      let newContacts = state.accounts;
      newContacts.push(action.account);
      return {...state,accounts:newContacts}
    case 'UPDATE_ACCOUNTS':
      return {...state,accounts:action.newAccounts};
    case 'DELETE_ACCOUNT':
      return {...state,accounts:action.newAccounts}
    default:
      return state;
  }
}

export default reducer;
