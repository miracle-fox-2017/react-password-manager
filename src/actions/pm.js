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

export const add_pm = (AddedPm) => {
	db.ref('pms').push({
		url: AddedPm.url,
		owner: AddedPm.owner,
		username: AddedPm.username,
		password: AddedPm.password
	})
	return {
		type: "ADD_PM",
		payload: {
			pm: AddedPm
		}
	}
}

export const getPmFromFirebase = () => {
	return (dispatch, getState) => {
		db.ref('pms').on('value', function(snapshot) {
			let pms= []
			for (let pm in snapshot.val()){
				pms.push(snapshot.val()[pm])
			}
			dispatch(get_pm(pms))
		})
	}
}