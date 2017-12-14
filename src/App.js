import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'bulma/css/bulma.css'
import TheNavBar from './components/TheNavBar'
import Home from './components/Home'
import Password from './components/Password'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <TheNavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={Password}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
