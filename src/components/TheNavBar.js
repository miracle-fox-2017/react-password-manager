import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const style = {
  font: {
    fontSize: "20px"
  }
}

class TheNavBar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <Link to='/' style={style.font} className="navbar-item">
            <i class="fa fa-lock" aria-hidden="true"></i>&nbsp;Password Manager
          </Link>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              <i class="fa fa-home" aria-hidden="true"></i> Home
            </Link>
            <Link to="/add" className="navbar-item">
              <i class="fa fa-key" aria-hidden="true"></i>Add
            </Link>
            <Link to="/list" className="navbar-item">
              <i class="fa fa-list" aria-hidden="true"></i>List
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default TheNavBar
