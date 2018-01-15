import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import Home from './components/Home'
import DataListProfile from './components/DataListProfile'
import EditData from './components/EditData'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/list" component={DataListProfile} />
           <Route exact path="/list/:key" component={EditData} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
