import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store/'
import Form from './components/Form'
import TableWidget from './components/TableWidget'

ReactDOM.render(
  <Provider store= {store}>
    <div>
      <App />
    </div>
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
