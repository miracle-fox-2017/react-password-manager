import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import React,{Component} from 'react';
import store from '../redux';

import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Add from './Add';

export class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <Router>
          <div>
            <Navbar/>
            <Route exact path="/" render={() => <Home/>}/>
            <Route path="/add" render={() => <Add/>}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
