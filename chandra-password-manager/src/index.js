import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'
import store from './store/index'
import { Provider } from 'react-redux'
import { history } from './store'
var config = {
  apiKey: "AIzaSyCxTKfEOi2N7BjCfQK8S_-hS2lmbRYASlU",
  authDomain: "coba-38738.firebaseapp.com",
  databaseURL: "https://coba-38738.firebaseio.com",
  projectId: "coba-38738",
  storageBucket: "coba-38738.appspot.com",
  messagingSenderId: "1023111052949"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
