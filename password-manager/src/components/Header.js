import React, { Component } from 'react';
import Search from './Search'
import './../App.css';

class Header extends Component {
  render() {
    return (
      <div className="header text-center">
        <header className="App-header ">
          <h1 className="App-title">Password Manager</h1>
        </header>
        <Search />
      </div>
    );
  }
}

export default Header
