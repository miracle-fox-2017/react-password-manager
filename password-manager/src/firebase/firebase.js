import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAPEpY8K58OyAv76wR6sh4IWFeJCpPORrs",
  authDomain: "password-manager-cd60b.firebaseapp.com",
  databaseURL: "https://password-manager-cd60b.firebaseio.com",
  projectId: "password-manager-cd60b",
  storageBucket: "password-manager-cd60b.appspot.com",
  messagingSenderId: "576083051175"
};
firebase.initializeApp(config);
var db = firebase.database()

export default db