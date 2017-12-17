const initialState = {
  profile: []
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "get_data":
      return { ...state, profile: action.payload }
    default:
      return state
  }
}

export default profileReducer