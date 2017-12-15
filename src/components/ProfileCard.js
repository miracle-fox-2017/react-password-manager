import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getAllContacts, getUserData} from '../action'

class ProfileCard extends Component {
  constructor(props) {
    super()
  }
  
  componentWillMount() {
    this.props.fetchContact()
  }

  render () {
    return (
      <div>
        {this.props.profile.map(a => {

      return <div className="card col-md-3">
      <h3 className="card-header">Password Management</h3>
        <div className="card-body">
          <label>URL :</label>
          <br />
          <input type="text" className="form" value={a.url}/>
          <br />
          <label>Username :</label>
          <br />
          <input type="text" className="form" value={a.username} />
          <br />
          <label>Password :</label>
          <br />
          <input type="text" className="form" value={a.password} />
        </div>
        <div className="card-footer text-muted">
          THIS IS HERO
        </div>
      </div>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContact: () => {
      dispatch(getUserData())
    },
    contact: (contacts) => {
      dispatch(getAllContacts(contacts))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard)