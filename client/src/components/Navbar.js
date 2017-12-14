import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Form from './Form'
class Navbar extends React.Component {
  render () {
    return (
      <div>
       <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">React Password</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home </Link></li>
              <li><Link to="/form">Form </Link></li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input className="form-control" placeholder="Search" type="text"/>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Login</a></li>
            </ul>
          </div>
        </div>
        </nav>
        <Route exact path="/" component={Home}/>
        <Route exact path="/form" component={Form}/>
      </div>

    )
  }

}

export default Navbar
