import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyDPwZ-A2fL2ID72T372D0Hc5A2Wc_Lkkqw",
	authDomain: "omni-pass.firebaseapp.com",
	databaseURL: "https://omni-pass.firebaseio.com",
	projectId: "omni-pass",
	storageBucket: "omni-pass.appspot.com",
	messagingSenderId: "847614326510"
};

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()

export default db