import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getAllContacts, getUserData, updateProfile} from '../action'

class ProfileCard extends Component {
  constructor(props) {
    super()
  }
  
  componentWillMount() {
    this.props.fetchContact()
  }

  enableEdit (profile) {
    console.log('dapet idnya gak?', profile.key)
    this.props.update(profile)
  }

  render () {
    return (
      <div>
        {this.props.profile.map(profile => {
      return <div key={profile.key} className="card col-md-3">
      <h3 className="card-header">Password Management</h3>
        <div className="card-body">
          <label>URL :</label>
          <br />
          <input type="text" name="url" className="form" value={profile.url}/>
          <br />
          <label>Username :</label>
          <br />
          <input type="text" name="username" className="form" value={profile.username} />
          <br />
          <label>Password :</label>
          <br />
          <input type="text" name="password" className="form" value={profile.password} />
        </div>
        <div className="card-footer text-muted">
          <button onClick={() => this.enableEdit(profile)} >Edit </button>
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
    },
    update: (contact) => {
      dispatch(updateProfile(contact))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard)