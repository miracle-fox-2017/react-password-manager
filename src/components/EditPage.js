import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateProfile} from '../action'

class EditProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      key: '',
      url: '',
      username: '',
      password: '',
      upperCasePass: false,
      lowerCasePass: false,
      hasSpecialChar: false,
      hasNumber: false,
      achieveMinLength: false,
      validPassword: false
    }
  }

  componentWillMount() {
    console.log('testing aja',this.props.profile);
    this.setState({
      key: this.props.profile.key,
      url: this.props.profile.url,
      username: this.props.profile.username,
      password: this.props.profile.password
    })
  }

  updateProfile (event) {
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

  saveProfile () {
    const update = {
      key: this.state.key,
      url: this.state.url,
      username: this.state.username,
      password: this.state.password
    }
    this.setState({
      redirectstate: true
    })
    console.log(update)
    this.props.updating(update)
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <h2>Edit Page</h2>
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
          onChange={this.updateProfile.bind(this)} />
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
      <button onClick={this.saveProfile.bind(this)}>Save</button>
      </div>
    )
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


const mapStateToProps = (state, props) => {
  console.log('map state ', props)
  console.log('ini statenya ', state)
  let result = state.find(a => a.key === props.match.params.id)
  console.log('hasilnya ', result);
  return {
    profile: result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updating: (profile) => {
      dispatch(updateProfile(profile))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
