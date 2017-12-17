import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store/'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Form from './components/Form'
import TableWidget from './components/TableWidget'

ReactDOM.render(
  <Provider store= {store}>
    <Router>
      <div>
        <App />
        <Route exact path="/" component={TableWidget}/>
        <Route path="/add" component={Form}/>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
