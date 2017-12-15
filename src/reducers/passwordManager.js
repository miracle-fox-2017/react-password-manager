const initialState = {
  passwordStore: [{
    url: "helooooo"
  }]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE':
      return state
    default:
      return state
  }
}

export default reducer
