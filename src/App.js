import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Container } from 'semantic-ui-react'
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
            <Container>
              <Navbar/>
              <Route exact path='/' component={ HomePage }/>
              <Route path="/add" component={ AddPage }/>
              <Route path="/edit/:id" component={ EditPage }/>
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
