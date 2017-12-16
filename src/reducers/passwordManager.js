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
        return pass.id !== action.payload.id
      })
      return {...state, passwordStore: newArrs}
    case 'EDIT_PASSWORD':
      let newPassword = state.passwordStore.map(pass => {
        if(pass.id === action.payload.id){
          return action.payload
        }
        return pass
      })
      return {...state, passwordStore: newPassword}
    default:
      return state
  }
}

export default reducer
