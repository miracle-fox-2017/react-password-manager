import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCWoVO3yO9bJl4u9V93UwBlQH3sn0-c-Qg",
  authDomain: "logo-racer.firebaseapp.com",
  databaseURL: "https://logo-racer.firebaseio.com",
  projectId: "logo-racer",
  storageBucket: "logo-racer.appspot.com",
  messagingSenderId: "841398408259"
}

firebase.initializeApp(config)
const database = firebase.database()

export default database