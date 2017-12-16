import React, { Component } from 'react'
import { connect } from 'react-redux'
import passwordAction from '../actions/actionPasswordManager'
import { Redirect } from 'react-router'

const containerFix = {
  marginTop: '10px'
}

class AddPassword extends Component {
  constructor(props) {
    super()
    this.state = {
      url: '',
      username: '',
      password: '',
      status: false
    }
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler() {
    this.props.addPassword(this.state)
    this.setState({
      url: '',
      username: '',
      password: '',
      status: true
    })
  }

  deleteHandler(item) {
    this.props.removePassword(item)
  }

  render() {
    const redirect = this.state.status
    if (redirect) {
      return <Redirect to="/" />
    }

    let testLower = /[a-z]/.test(this.state.password)
    let testUpper = /[A-Z]/.test(this.state.password)
    let testSpecial = /[$&+,:;=?@#|'<>.^*()%!-]/.test(this.state.password)
    let testNumber = /[0-9]/.test(this.state.password)
    let testLength = this.state.password.length > 5
    let passwordStrength = 'is-danger'
    if(testLower && testUpper && testSpecial && testNumber && testLength){
      passwordStrength = 'is-success'
    }

    return (
      <div className="container" style={containerFix}>
        <label className="label">URL</label>
        <div className="field has-addons">
          <p className="control">
            <a className="button is-static">
              http://
            </a>
          </p>
          <div className="control">
            <input value={this.state.url} className="input" type="text" placeholder="hacktiv8.com" onChange={ (e) => this.setState({ url: e.target.value }) } />
          </div>
        </div>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input value={this.state.username} className="input" type="text" placeholder="username" onChange={ (e) => this.setState({ username: e.target.value }) } />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input value={this.state.password} className="input" type="password" placeholder="********" onChange={ (e) => this.setState({ password: e.target.value }) }/>
          </div>
        </div>
        <div className={`notification ${passwordStrength}`}>
          <h1 className="title is-5">Password Strength</h1>
          <p>[{ testUpper ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i> }] Password harus memiliki setidaknya satu karakter huruf besar (upper case)</p>
          <p>[{ testLower ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i> }] Password harus memiliki setidaknya satu karakter huruf kecil (lower case)</p>
          <p>[{ testSpecial ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i> }] Password harus memiliki setidaknya satu karakter spesial ( !@#$%^... )</p>
          <p>[{ testNumber ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i> }] Password harus memiliki setidaknya satu angka</p>
          <p>[{ testLength ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i> }] Password harus memiliki panjang lebih dari 5 karakter</p>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button onClick={this.submitHandler} className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    getPassword: state.passwordManager.passwordStore
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPassword: (payload) => dispatch(passwordAction.addPassword(payload)),
    removePassword: (payload) => dispatch(passwordAction.removePassword(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPassword)
