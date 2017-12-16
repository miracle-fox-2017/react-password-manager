const initialState = {
  passwordStore: [{
    url: "helooooo",
    username: "asdasda",
    password: "asdasda"
  }]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PASSWORD':
      let newArr = state.passwordStore.concat(action.payload)
      return {...state, passwordStore: newArr}
    case 'REMOVE_PASSWORD':
      let newArrs = state.passwordStore.filter(function(pass) {
        return pass.url != action.payload.url
      })
      return {...state, passwordStore: newArrs}
    default:
      return state
  }
}

export default reducer
