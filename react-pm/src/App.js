import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import Navbar from './components/Navbar'
import Timeline from './components/Timeline'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Timeline/>
      </div>
    );
  }
}

export default App;
