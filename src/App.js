import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createStore } from 'redux'

import store from './store/'
import IndexPage from './components/IndexPage'
import PasswordList from './components/PasswordList'
import PasswordWidget from './components/PasswordWidget'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div className="routeWrap">
              <Route exact path='/' render= { () => (<IndexPage><PasswordList/></IndexPage>) } />
              <Route exact path='/add' render= { () => (<IndexPage><PasswordWidget/></IndexPage>) } />
              <Route exact path='/edit/:siteId' render= { (props) => (<IndexPage><PasswordWidget {...props}/></IndexPage>) } />
              <Route exact path='/delete/:siteId' render= { () => (<IndexPage><PasswordWidget/></IndexPage>) } />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;


