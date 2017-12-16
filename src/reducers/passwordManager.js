const initialState = {
  passwordStore: [{
    url: "helooooo"
  }]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PASSWORD':
      let newArr = state.passwordStore.concat(action.payload)
      return {...state, passwordStore: newArr}
    default:
      return state
  }
}

export default reducer
