import React, { Component } from 'react'
import passwordAction from '../actions/actionPasswordManager'
import { connect } from 'react-redux'

class Edit extends Component {
  constructor(props) {
    super()
    this.state = {
      id: '',
      url: '',
      username: '',
      password: ''
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
      password: willEditPassword[0].password
    })
  }

  submitHandler() {
    this.props.setEditedPassword(this.state)
  }

  render() {
    return (
      <div className="container">
        <h1 className="title is-2">Edit Your Password </h1>
        <div className="field">
          <label className="label">URL</label>
          <div className="control">
            <input value={this.state.url} className="input" type="text" placeholder="http://hacktiv8.com" onChange={ (e) => this.setState({ url: e.target.value }) } />
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
        <div className="notification is-danger">
          <p>[ ] Password harus memiliki setidaknya satu karakter huruf besar (upper case)</p>
          <p>[ ] Password harus memiliki setidaknya satu karakter huruf kecil (lower case)</p>
          <p>[ ] Password harus memiliki setidaknya satu karakter spesial ( !@#$%^... )</p>
          <p>[ ] Password harus memiliki setidaknya satu angka</p>
          <p>[ ] Password harus memiliki panjang lebih dari 5 karakter</p>
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
