import React, { Component } from 'react';
import logo from '../logo.svg'

class Headers extends Component {
  render () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
    )
  }
}

export default Headers