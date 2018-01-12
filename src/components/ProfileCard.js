import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  Link
} from 'react-router-dom'

import {getAllContacts, getUserData, updateProfile, removeProfile} from '../action'

class ProfileCard extends Component {
  constructor(props) {
    super()
    this.state = {
      key: '',
      url: '',
      username: '',
      password: ''
    }
  }
  
  componentWillMount() {
    this.props.fetchContact()
  }

  handleChange(event) {
    console.log('event yang terjadi =====', event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleEdit (profile) {
    console.log('dapet idnya gak?', profile.key)
    this.props.updating(profile)
  }

  removeData (key) {
    this.props.removing(key)
    window.location.reload()
  }

  render () {
    return (
      <div className="row">
        {this.props.profile.map(profile => {
      return <div key={profile.key} className="card col-md-3">
      <h3 className="card-header">Password Management</h3>
        <div className="card-body">
          <label>URL :</label>
          <br />
          <input type="text" name="url" className="form" value={profile.url}
            onChange={this.handleChange.bind(this)}/>
          <br />
          <label>Username :</label>
          <br />
          <input type="text" name="username" className="form" value={profile.username} 
            onChange={this.handleChange.bind(this)}/>
          <br />
          <label>Password :</label>
          <br />
          <input type="text" name="password" className="form" value={profile.password} 
          onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="card-footer text-muted">
          <Link to={`/edit/${profile.key}`} >Edit </Link>
          <button onClick={() => this.removeData(profile.key)} >Delete </button>
        </div>

      </div>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log('map to state ', props)
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
    updating: (contact) => {
      dispatch(updateProfile(contact))
    },
    removing: (key) => {
      dispatch(removeProfile(key))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard)