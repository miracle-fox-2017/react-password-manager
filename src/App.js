import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import HomePage from './components/HomePage'
import AddPage from './components/AddPage'
import EditPage from './components/EditPage'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
              <Route exact path='/' render={(props) => <Navbar><HomePage/></Navbar>}/>
              <Route path="/add" render={(props) => <Navbar><AddPage/></Navbar>}/>
              <Route path="/edit/:id" render={(props) => <Navbar><EditPage id={props}/></Navbar>}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
