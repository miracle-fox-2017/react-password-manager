const initialState = {
	sites : [{
		owner: '',
		url: '',
		username: '',
		password: '',
		createdAt: new Date(),
		updatedAt: null
	}]
}

export const siteReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_ACCOUNT_SUCCESS':
			const sites = state.sites.concat(action.payload.sites)
			return { ...state, sites: sites };

		case 'ADD_NEW_ACCOUNT_SUCCESS':
			const newAccount = state.sites.push(action.payload.newAccount)
			return { ...state, sites: newAccount }

		default:

			return state;
	}
}