import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import Navbar from './components/Navbar'
import Timeline from './components/Timeline'
import Modaldata from './components/Datamodal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Timeline/>
        <Modaldata/>
      </div>
    );
  }
}

export default App;
