import React,{Component} from 'react'
import {Link ,Route} from 'react-router-dom'
import Form from './components/Header/form'
import FormList from './components/Header/formList'
class Navbar extends Component{
    render(){
        return(
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link to='/' className="nav-link" >Home </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/list' className="nav-link" >Form List </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                </ul>
              </div>
            </nav>
            <Route path="/" component={Form}></Route>
            <Route path="/list" component={FormList}></Route>
          </div>
        )
    }
}

export default Navbar