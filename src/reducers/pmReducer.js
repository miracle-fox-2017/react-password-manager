const intialState = {
  pms: [{
      url: '',
      owner: '',
      username: '',
      password: ''
  }]
}

const pmReducer = (state=intialState,action) => {
	switch (action.type) {
		case 'ADD_PM':
			const newPms = state.pms.concat(action.payload.pms)
			return {...state, pms: newPms}
		case 'GET_PMS':
			return {...state, pms: action.payload.pms}			
		default:
			return state
	}
}

export default pmReducer