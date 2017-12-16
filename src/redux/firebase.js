import * as Firebase from 'firebase';

const firebase = Firebase.initializeApp({
  apiKey: "AIzaSyBA7zRgriTuuAdPhApdNIKadWb4ChNJpgI",
  authDomain: "password-manager-react.firebaseapp.com",
  databaseURL: "https://password-manager-react.firebaseio.com",
  projectId: "password-manager-react",
  storageBucket: "password-manager-react.appspot.com",
  messagingSenderId: "370637493033"
});

export const db = firebase.database();
