import React, { Component } from 'react';
import store from './store/store'
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import history from './history';

//import kumpulan komponen
import Home from './Home'
import Navbar from './Navbar'
import EditPassword from './EditPassword'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <Navbar/>
            {/* Kumpulan Route */}
            <Route exact path="/" render={() => <Home />}/>
            <Route path="/:id" render={(props) => <EditPassword {...props} />}/>
          </div>
        </Router>
    </Provider>
    );
  }
}

export default App;
