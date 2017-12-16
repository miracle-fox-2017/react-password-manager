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