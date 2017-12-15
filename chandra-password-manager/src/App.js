import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Layout from './components/layout'
import Navbar from './navbar'
import Formlist from './components/Header/formList'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Password Manager</h1>
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
