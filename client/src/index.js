import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'

export const config = {
  apiKey: "AIzaSyAJZA9yV8dtutphQ1o_fo-Er5RzT_fFI8o",
  authDomain: "react-2e3f2.firebaseapp.com",
  databaseURL: "https://react-2e3f2.firebaseio.com",
  projectId: "react-2e3f2",
  storageBucket: "",
  messagingSenderId: "229357531180"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
