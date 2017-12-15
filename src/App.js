import React, { Component } from 'react';
import {Provider} from 'react-redux';

import store from './store/index.js'

import './App.css';

import Headers from './components/Headers'
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Headers />
          <HomePage />
        </div>
      </Provider>
    );
  }
}

export default App;
