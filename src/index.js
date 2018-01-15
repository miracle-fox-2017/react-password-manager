import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyC_uO5C7DCWmk8CbVzSAxNe177YMqJe5VE ',
  databaseURL: 'https://password-manager-d2507.firebaseio.com/',
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
