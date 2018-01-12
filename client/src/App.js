import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';
import { Provider } from 'react-redux'
import store from './store/index.js'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
