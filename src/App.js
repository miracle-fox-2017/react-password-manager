import React, { Component } from 'react';
import store from './store/store'
import {Provider} from 'react-redux'
import Addpassword from './Addpassword'

//import kumpulan komponen
import Navbar from './Navbar'
import Tablepassword from './Tablepassword'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Addpassword/>
          <Tablepassword/>
        </div>
      </div>
    </Provider>
    );
  }
}

export default App;
