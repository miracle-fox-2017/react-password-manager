import { snapshotToArray, searchSite } from '../helpers/helper'
import _ from 'lodash'

const initialState = {
	sites : [{
		owner: '',
		url: '',
		username: '',
		password: '',
		createdAt: new Date(),
		updatedAt: null
	}],
	queriedSites: []
}

export const siteReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_SITE_SUCCESS':
			console.log('FETCH_SITE_SUCCESS', snapshotToArray(action.payload.sites))
			const sites = snapshotToArray(action.payload.sites)
			return sites;

		case 'ADD_NEW_SITE':
			const newSites = state.concat(action.payload.site)
			return newSites
		
		case 'UPDATE_SITE':
			const payload = action.payload.site 
			const updatedSites = [];
			
			Array.from(state).map(site => {
				if (site.key === action.payload.key) {
					console.log(site.key)
					site.owner = payload.owner
					site.username = payload.username
					site.password = payload.password
					site.url = payload.url
					site.updatedAt = payload.updatedAt
				}

				updatedSites.push(site)
			})

			return updatedSites

		case 'REMOVE_SITE':
			const key = action.payload.key
			const filteredSites = _.filter(state, (site) => site.key !== key) 

			return filteredSites	

		default:
			return state;
	}
}