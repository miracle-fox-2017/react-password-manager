const initialState = {
  passwordStore: [{
    id: "1",
    url: "helooooo",
    username: "asdasda",
    password: "asdasda",
    createdAt: new Date(),
    updatedAt: ''
  },{
    id: "2",
    url: "heloooooxxx",
    username: "asdasdaasda",
    password: "asdasdadsasda",
    createdAt: new Date(),
    updatedAt: ''
  }]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PASSWORD':
      action.payload.id = (state.passwordStore.length + 1).toString()
      action.payload.createdAt = new Date()
      action.payload.updatedAt = ''
      let newArr = state.passwordStore.concat(action.payload)
      return {...state, passwordStore: newArr}
    case 'REMOVE_PASSWORD':
      let newArrs = state.passwordStore.filter(function(pass) {
        return pass.id !== action.payload.id
      })
      return {...state, passwordStore: newArrs}
    case 'EDIT_PASSWORD':
      let newPassword = state.passwordStore.map((pass, i) => {
        if(pass.id === action.payload.id){
          action.payload.createdAt = state.passwordStore[i].createdAt
          action.payload.updatedAt = new Date()
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
