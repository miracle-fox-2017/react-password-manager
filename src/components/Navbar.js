import {Link} from 'react-router-dom';
import React,{Component} from 'react';
import {connect} from 'react-redux';

import {fetchAccounts} from '../redux/actions/action-accounts';
import './Navbar.css';

class Navbar extends Component {
  componentWillMount(){
    this.props.fetchAccounts();
  }
  render(){
    return(
      <div className="navbar-wrapper">
        <Link to="/" className="button">Home</Link>
        <Link to="/add" className="button">Add</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccounts : () => dispatch(fetchAccounts())
  }
}

export default connect(null,mapDispatchToProps)(Navbar);
