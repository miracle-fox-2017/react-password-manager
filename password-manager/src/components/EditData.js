import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header'
import ButtonListProfile from './ButtonListProfile'
import { updateData } from '../actions/profileAction'

class EditData extends Component {

  constructor() {
    super()
    this.state = {
      profile: {
        url: '',
        username: '',
        password: '',
        createdAt: '',
        key: ''
      },
      fiveChar: false,
      lowerCase: false,
      upperCase: false,
      oneNumber: false,
      specialCharacter: false
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
  inputDataProfile(event) {

    event.preventDefault()
    if (this.state.fiveChar && this.state.lowerCase && this.state.upperCase && this.state.oneNumber && this.state.specialCharacter) {
      this.props.updateDataProfile(this.state.profile)
      this.props.history.push('/list')
    } else {
      alert("Your password is not strength!")
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
  componentWillMount() {
    this.setState({
      profile: {
        url: this.props.profile ? this.props.profile.url : '',
        username: this.props.profile ? this.props.profile.username : '',
        password: this.props.profile ? this.props.profile.password : '',
        createdAt: this.props.profile ? this.props.profile.createdAt : '',
        key: this.props.profile ? this.props.profile.key : ''
      },
      fiveChar: true,
      lowerCase: true,
      upperCase: true,
      oneNumber: true,
      specialCharacter: true

    })
  }

  render() {
    return (
      <div className="text-center">
        <Header />
        <ButtonListProfile />
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
            <fieldset style={{ margin: "20px 0px" }} className="checkbox text-left">
              <p className="text-center">Password Strength :</p>
              <input type="checkbox" checked={this.state.upperCase} onChange={this.handleInputChange} /> Password harus memiliki setidaknya satu karakter huruf besar (upper-case)<br />
              <input type="checkbox" checked={this.state.lowerCase} onChange={this.handleInputChange} /> Password harus memiliki setidaknya satu karakter huruf kecil (lower-case)<br />
              <input type="checkbox" checked={this.state.specialCharacter} onChange={this.handleInputChange} /> Password harus memiliki setidaknya satu karakter spesial (#$%@!%&..)<br />
              <input type="checkbox" checked={this.state.oneNumber} onChange={this.handleInputChange} /> Password harus memiliki setidaknya satu angka<br />
              <input type="checkbox" checked={this.state.fiveChar} onChange={this.handleInputChange} /> Password harus memiliki panjang (length) lebih dari 5 karakter<br />
            </fieldset>
            <Link to="/list">
              <button type="submit" className="btn btn-default" onClick={this.inputDataProfile}>Update</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    profile: state.profileReducer.profile.find((singleProfile) => singleProfile.key === props.match.params.key)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateDataProfile: (newData) => dispatch(updateData(newData))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditData)

