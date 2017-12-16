const initialState = {
  passwordStore: [{
    id: "1",
    url: "helooooo",
    username: "asdasda",
    password: "asdasda"
  },{
    id: "2",
    url: "heloooooxxx",
    username: "asdasdaasda",
    password: "asdasdadsasda"
  }]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PASSWORD':
      action.payload.id = (state.passwordStore.length + 1).toString()
      let newArr = state.passwordStore.concat(action.payload)
      return {...state, passwordStore: newArr}
    case 'REMOVE_PASSWORD':
      let newArrs = state.passwordStore.filter(function(pass) {
        return pass.url !== action.payload.url
      })
      return {...state, passwordStore: newArrs}
    case 'EDIT_PASSWORD':
      console.log(action)
      return state
    default:
      return state
  }
}

export default reducer
