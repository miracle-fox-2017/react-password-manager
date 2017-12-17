import React, { Component } from 'react';

//import kumpulan komponen
import Tablepassword from './Tablepassword'
import Addpassword from './Addpassword'

class Home extends Component {
  render() {
    return (
        <div className="container">
          <Addpassword/>
          <Tablepassword/>
        </div>
    );
  }
}

export default Home;
