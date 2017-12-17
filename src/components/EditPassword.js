import React, { Component } from 'react'
import passwordAction from '../actions/actionPasswordManager'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class Edit extends Component {
  constructor(props) {
    super()
    this.state = {
      id: '',
      url: '',
      username: '',
      password: '',
      status: false
    }

    this.componentWillMount = this.componentWillMount.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  componentWillMount() {
    let willEditPassword = this.props.getOnePassword.filter((password) => {
      return password.id === this.props.match.params.id
    })
    this.setState({
      id: willEditPassword[0].id,
      url: willEditPassword[0].url,
      username: willEditPassword[0].username,
      password: willEditPassword[0].password,
      createdAt: willEditPassword[0].createdAt,
      updatedAt: willEditPassword[0].updatedAt
    })
  }

  submitHandler() {
    this.props.setEditedPassword(this.state)
    this.setState({
      status: true
    })
  }

  render() {
    const redirect = this.state.status
    if (redirect) {
      return <Redirect to='/'/>
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
      <div className="container">
        <h1 className="title is-2">Edit Your Password </h1>
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

const mapStateToProps = state => {
  return ({
    getOnePassword: state.passwordManager.passwordStore
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    setEditedPassword: (payload) => dispatch(passwordAction.editPassword(payload))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
