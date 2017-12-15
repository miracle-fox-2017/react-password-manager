import { snapshotToArray } from '../helpers/helper'

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
		case 'FETCH_SITE_SUCCESS':
			console.log('FETCH_SITE_SUCCESS', snapshotToArray(action.payload.sites))
			const sites = snapshotToArray(action.payload.sites)
			return sites;

		case 'ADD_NEW_SITE_SUCCESS':
			const newAccount = state.sites.push(action.payload.newAccount)
			return { ...state, sites: newAccount }

		default:

			return state;
	}
}