import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import Navbar from './components/Navbar'
import Timeline from './components/Timeline'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar/>
          <Timeline/>
        </div>
      </Provider>
    );
  }
}

export default App;
