const initialState = {
  form: [],
}

const Form = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      console.log('isi data REDUCERS', action.payload.data);
      state.form = action.payload.data
       return {...state}
    default:
     return state
  }
}

export default Form
