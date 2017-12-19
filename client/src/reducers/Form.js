const initialState = {
  form: [],
}

const Form = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      state.form = action.payload.data
       return {...state}
    default:
      return state
  }
}

export default Form
