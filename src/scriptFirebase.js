const firebase = require('firebase')

var config = {
  apiKey: "AIzaSyASbY11kYqMnEC9d2dQfJ8giKtd-RQnQPc",
  authDomain: "nahtanoy-1f645.firebaseapp.com",
  databaseURL: "https://nahtanoy-1f645.firebaseio.com",
  projectId: "nahtanoy-1f645",
  storageBucket: "nahtanoy-1f645.appspot.com",
  messagingSenderId: "932684284380"
};
firebase.initializeApp(config);

var db = firebase.database()

module.exports = db;