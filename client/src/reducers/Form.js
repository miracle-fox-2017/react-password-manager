const initialState = {
  form: []
}

const Form = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
    state.form = action.payload.form
    return {...state}
    default:
     return state
  }
}

export default Form
