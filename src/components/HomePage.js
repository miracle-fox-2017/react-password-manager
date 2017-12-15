import React, { Component } from 'react';
import {connect} from 'react-redux';

import { getAllContacts, getUserData } from '../action'

class HomePage extends Component {

  componentWillMount() {
    this.props.fetchContact()
  }

  render () {
    return (
      <form>
        {JSON.stringify(this.props.contacts)}
        <fieldset>
          <legend>Password Form</legend>
            <div className="form-group">
              <label htmlFor="inputURL">URL</label>
              <input type="text" className="form-control" id="inputURL" placeholder="input url" />
            </div>
            <div className="form-group">
              <label htmlFor="inputUsername">Username</label>
              <input type="text" className="form-control" id="inputUsername" placeholder="input username" />
            </div>
            <div className="form-group">
               <label htmlFor="inputPassword">Password</label>
              <input type="password" className="form-control" id="inputPassword" placeholder="input Password" />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </fieldset>
      </form>
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
    fetchContact: () => dispatch(getUserData()),
    contact: (contacts) => dispatch(getAllContacts(contacts))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
