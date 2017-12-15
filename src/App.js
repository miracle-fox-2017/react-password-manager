import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import store from './store'
import Home from './Components/Home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">.
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Route exact path='/' component={Home}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;