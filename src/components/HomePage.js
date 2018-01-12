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
      password: 'ini password',
      upperCasePass: false,
      lowerCasePass: false,
      hasSpecialChar: false,
      hasNumber: false,
      achieveMinLength: false,
      validPassword: false,
      status: 'added !'
    }
  }

  updateProfile (event) {
    console.log('event yang terjadi =====', event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })        
    if (event.target.name === 'password') {
      const valPass = event.target.value
      const lengthMin = this.minLengthCheck(valPass)
      const upperCase = this.upperCaseCheck(valPass)
      const lowerCase = this.lowerCaseCheck(valPass)
      const hasNumber = this.numberCheck(valPass)
      const specialChar = this.specialCharCheck(valPass)
      this.isValidPass(upperCase, lowerCase, hasNumber, specialChar, lengthMin)
    }
  }

  minLengthCheck(valPass) {
    if (valPass.length >= 8) {
      this.setState({ achieveMinLength: true })
      return true
    } else {
      this.setState({ achieveMinLength: false })
      return false
    }
  }

  upperCaseCheck(valPass) {
    if (/[A-Z]/.test(valPass)) {
      this.setState({ upperCasePass: true })
      return true
    } else {
      this.setState({ upperCasePass: false })
      return false
    }
  }

  lowerCaseCheck(valPass) {
    if (/[a-z]/.test(valPass)) {
      console.log('tes in lowercase', valPass)
      this.setState({ lowerCasePass: true })
      return true
    } else {
      this.setState({ lowerCasePass: false })
      return false
    }
  }

  numberCheck(valPass) {
    if (/\d+/g.test(valPass)) {
      this.setState({ hasNumber: true })
      return true
    } else {
      this.setState({ hasNumber: false })
      return false
    }
  }

  specialCharCheck(valPass) {
    if (/[^A-Za-z0-9]/g.test(valPass) && /\S/g.test(valPass)) {
      this.setState({ hasSpecialChar: true })
      return true
    } else {
      this.setState({ hasSpecialChar: false })
      return false
    }
  }


  isValidPass(upper, lower, number, specialChar, lengthPass) {
    if (upper && lower && number && specialChar && lengthPass) {
      this.setState({ validPassword: true })
    } else {
      this.setState({ validPassword: false })
    }
  }

  inputProfile () {
    const newProfile = {
      url: this.state.url,
      username: this.state.username,
      password: this.state.password
    }
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
            <h4 className="text-warning">Password Strength : </h4>
            <p>
              {this.callMinLength.call(this)}
              Minimum length 8 character
                            </p>
            <p>
              {this.callUpperCase.call(this)}
              At least has one upper case character
                            </p>
            <p>
              {this.callLowerCase.call(this)}
              At least has one lower case character
                            </p>
            <p>
              {this.callSpecialChar.call(this)}
              At least has one special character (!@#$%^&*...)
                            </p>
            <p>
              {this.callnumber.call(this)}
              At least has one number character
                            </p>
            <button type="submit" className="btn btn-primary" 
             onClick={() => this.inputProfile()}>Save</button>
        </fieldset>
      </form>
      <div className="row">
          <ProfileCard />
      </div>
      </div>
    )
  }

  callMinLength() {
    if (this.state.achieveMinLength) {
      return <span>[ X ] - </span>
    } else {
      return <span>[   ] - </span>
    }
  }
  callUpperCase() {
    if (this.state.upperCasePass) {
      return <span>[ X ] - </span>
    } else {
      return <span>[   ] - </span>
    }
  }
  callLowerCase() {
    if (this.state.lowerCasePass) {
      return <span>[ X ] - </span>
    } else {
      return <span>[   ] - </span>
    }
  }
  callSpecialChar() {
    if (this.state.hasSpecialChar) {
      return <span>[ X ] - </span>
    } else {
      return <span>[   ] - </span>
    }
  }
  callnumber() {
    if (this.state.hasNumber) {
      return <span>[ X ] - </span>
    } else {
      return <span>[   ] - </span>
    }
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
