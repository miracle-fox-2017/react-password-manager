import React, { Component } from 'react';
import './../App.css';
import Header from './Header'
import { connect } from 'react-redux'
import { inputNewDataProfile } from '../actions/profileAction'
import ButtonListProfile from './ButtonListProfile'
import PasswordWidget from './PasswordWidget'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      profile: {
        url: '',
        username: '',
        password: ''
      },
      upperCase: false,
      lowerCase: false,
      specialCharacter: false,
      oneNumber: false,
      fiveChar: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.inputDataProfile = this.inputDataProfile.bind(this)
  }
  handleInputChange(event) {
    let profile = this.state.profile
    profile[event.target.name] = event.target.value
    this.setState({
      profile
    })
    let password = this.state.profile.password

    if (event.target.name === "password") {
      this.checkPassword(password)
    }
  }

  checkPassword(password) {
    if ((/[A-Z]/.test(password))) {
      this.setState({
        upperCase: true
      })
    } else {
      this.setState({
        upperCase: false
      })
    }
    if ((/[a-z]/.test(password))) {
      this.setState({
        lowerCase: true
      })
    } else {
      this.setState({
        lowerCase: false
      })
    }
    if ((/[$-/:-?{-~@#!"^_`[\]]/.test(password))) {
      this.setState({
        specialCharacter: true
      })
    } else {
      this.setState({
        specialCharacter: false
      })
    }
    if ((/[0-9]/.test(password))) {
      this.setState({
        oneNumber: true
      })
    } else {
      this.setState({
        oneNumber: false
      })
    }
    if (/.{6}$/.test(password)) {
      this.setState({
        fiveChar: true
      })
    } else {
      this.setState({
        fiveChar: false
      })
    }
  }
  inputDataProfile(event) {
    event.preventDefault()
    if (this.state.fiveChar && this.state.lowerCase && this.state.upperCase && this.state.oneNumber && this.state.specialCharacter) {
      this.props.inputDataProfile(this.state.profile)
      alert('Inserted 1 data...')
      this.setState({
        profile: {
          url: '',
          username: '',
          password: ''
        },
        fiveChar: false,
        lowerCase: false,
        upperCase: false,
        oneNumber: false,
        specialCharacter: false
      })
    } else {
      alert("Your password is not strength!")
    }
  }

  render() {

    return (
      <div className="App">
        <Header />
        <ButtonListProfile />
        <div className="container">
          <div className="row row-centered">
            <div className="col-md-6 col-centered">
              <form className="inputForm">
                <div className="form-group">
                  URL:
                    <input type="text" className="form-control" placeholder="Enter URL" name="url" value={this.state.profile.url} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  Username:
                    <input type="text" className="form-control" placeholder="Enter Username" name="username" value={this.state.profile.username} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  Password:
                    <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.profile.password} onChange={this.handleInputChange} />
                </div>
              </form>
             <PasswordWidget upperCase={this.state.upperCase} lowerCase={this.state.lowerCase} oneNumber={this.state.oneNumber} specialCharacter={this.state.specialCharacter} fiveChar={this.state.fiveChar} onChange={this.handleInputChange}/>
              <button type="submit" className="btn btn-default" onClick={this.inputDataProfile}>Save</button>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = null
const mapDispatchToProps = (dispatch) => {
  return {
    inputDataProfile: (profile) => dispatch(inputNewDataProfile(profile))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
