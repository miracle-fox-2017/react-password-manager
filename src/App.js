import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import 'bulma/css/bulma.css'
import TheNavBar from './components/TheNavBar'
import Home from './components/Home'
import EditPassword from './components/EditPassword'
import AddPassword from './components/AddPassword'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <TheNavBar />
              <Route exact path="/" component={Home} />
              <Route exact path="/add" component={AddPassword}/>
              <Route path="/edit/:id" component={EditPassword} />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
