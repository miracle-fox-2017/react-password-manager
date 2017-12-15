import React, { Component } from 'react';
import {connect} from 'react-redux';

import { sendUserData } from '../action'
import ProfileCard from './ProfileCard'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
        url: 'ini url',
        username: 'ini username',
        password: 'ini password'
    }
  }

  updateProfile (event) {
    console.log('event yang terjadi =====', event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  inputProfile () {
    const newProfile = {
      url: this.state.url,
      username: this.state.username,
      password: this.state.password
    }
    alert('Ini datanya lho ', newProfile)
    this.props.sendContact(newProfile)
  }

  render () {
    return (
      <div>
      <form className="container">
        <fieldset>
          <legend>Password Form</legend>
            <div className="form-group">
              <label htmlFor="inputURL">URL</label>
              <input type="text" className="form-control" id="inputURL"
                name="url" 
                value={this.state.url} 
                onChange={this.updateProfile.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="inputUsername">Username</label>
              <input type="text" className="form-control" id="inputUsername"
                name="username" 
                value={this.state.username} 
                onChange={this.updateProfile.bind(this)}
              />
            </div>
            <div className="form-group">
               <label htmlFor="inputPassword">Password</label>
              <input type="password" className="form-control" id="inputPassword" 
                name="password"
                value={this.state.password} 
                onChange={this.updateProfile.bind(this)}/>
            </div>
            <button type="submit" className="btn btn-primary" 
             onClick={() => this.inputProfile()}>Save</button>
        </fieldset>
      </form>
      <div className="row">
        <div className="col-md-12">
          <ProfileCard />
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('%c ================ini mapState')
  return {
    contacts: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendContact: (contact) => dispatch(sendUserData(contact))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
