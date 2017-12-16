import * as firebase from 'firebase'

var config = {
apiKey: "AIzaSyACCqRCmO3ulOzt8QPbtEekS0zm6haCoCE",
authDomain: "passwordmanagement-b4bbf.firebaseapp.com",
databaseURL: "https://passwordmanagement-b4bbf.firebaseio.com",
projectId: "passwordmanagement-b4bbf",
};
firebase.initializeApp(config);

const db = firebase.database()

export const get_pm = (pms) => {
	return {
		type: "GET_PMS",
		payload: {
			pms
		}
	}
}

export const delete_pm = (pmKey) => {
	db.ref('pms').child(pmKey).remove()
}

export const add_pm = (AddedPm) => {
	var postData = {
		url: AddedPm.url,
		owner: AddedPm.owner,
		username: AddedPm.username,
		password: AddedPm.password,
		createdAt: AddedPm.createdAt,
		updatedAt: null
	}
	db.ref('pms').push(postData)
	return {
		type: "ADD_PM",
		payload: {
			pm: AddedPm
		}
	}
}

export const search_pm = (searchUrl) => {
	return (dispatch) => {
		db.ref('pms').on('value', function(snapshot) {
			let pms = []
			snapshot.forEach(snap => {
				let pm = snap.val();
				pm.key = snap.key;
				pms.push(pm)
			})
			var searchPM = pms.filter(function(pm) {
			 	return pm.url.toLowerCase().search(
			 		searchUrl.toLowerCase()
			 	) !== -1;
			})
			if(searchUrl.length === 0){
				dispatch(getPmFromFirebase())
			}
				dispatch(get_pm(searchPM))				
		})		
	}
}

export const getPmFromFirebase = () => {
	return (dispatch, getState) => {
		db.ref('pms').on('value', function(snapshot) {
			let pms = []
			snapshot.forEach(snap => {
				let pm = snap.val();
				pm.key = snap.key;
				pms.push(pm)
			})
			dispatch(get_pm(pms))
		})
	}
}