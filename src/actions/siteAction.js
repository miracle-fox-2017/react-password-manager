import db from '../db'

export const fetchSites = () => {
	return (dispatch) => {
		db.ref('/vaults').once('value', (snapshot) => {
			dispatch({
				type: 'FETCH_SITE_SUCCESS',
				payload: {
					sites: snapshot
				}
			})
		})
	}
}

export const deleteSite = (key) => {
	return (dispatch) => {
		db.ref('/vaults').child(key).remove();

		dispatch({
			type: 'REMOVE_SITE',
			payload: {
				key: key
			}
		})
	}
}

export const addSite = (site) => {
	return (dispatch) => {
		db.ref('/vaults').push(site).key

		dispatch({
			type: 'ADD_NEW_SITE',
			payload: {
				site: site
			}
		})
	}
}

export const updateSite = (key, site) => {
	return (dispatch) => {
		db.ref(`/vaults/${key}`).update(site);

		dispatch({
			type: 'UPDATE_SITE',
			payload: {
				key: key,
				site: site
			}
		})
	}
}