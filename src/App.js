import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={ HomePage }/>
          <Route path="/add" component={ AddPage }/>
          <Route path="/edit/:id" component={ EditPage }/>
        </Router>
      </div>
    );
  }
}

export default App;
