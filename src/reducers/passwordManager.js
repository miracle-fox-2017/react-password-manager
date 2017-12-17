const initialState = {
  passwordStore: []
  // passwordStore: [{
  //   id: "1",
  //   url: "capung.com",
  //   username: "capung",
  //   password: "tempur",
  //   createdAt: new Date(),
  //   updatedAt: ''
  // },{
  //   id: "2",
  //   url: "lebah.com",
  //   username: "lebah",
  //   password: "movie",
  //   createdAt: new Date(),
  //   updatedAt: ''
  // }]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PASSWORD':
      // let fromFirebase = state.passwordStore.concat(action.payload)
      let fromFirebase = action.payload
      return {...state, passwordStore: fromFirebase}
    case 'ADD_PASSWORD':
      // action.payload.id = (state.passwordStore.length + 1).toString()
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
          action.payload.updatedAt = Date()
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
