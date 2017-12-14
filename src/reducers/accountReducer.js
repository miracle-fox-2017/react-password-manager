const initialState = {
	accounts : [{
		owner: '',
		url: '',
		username: '',
		password: '',
		createdAt: new Date(),
		updatedAt: null
	}]
}

export const accountReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_ACCOUNT_SUCCESS':
			const accounts = state.accounts.concat(action.payload.accounts)
			return { ...state, accounts: accounts };

		case 'ADD_NEW_ACCOUNT_SUCCESS':
			const newAccount = state.accounts.push(action.payload.newAccount)
			return { ...state, accounts: newAccount }

		default:

			return state;
	}
}