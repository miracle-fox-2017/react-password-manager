import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import store from './store/index.js'

import './App.css';

import Headers from './components/Headers'
import HomePage from './components/HomePage'
import EditPage from './components/EditPage'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
        <div className="App">
          <Headers />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/edit/:id" component={EditPage} />
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
