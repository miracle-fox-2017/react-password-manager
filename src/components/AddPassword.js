import React, { Component } from 'react'
import { connect } from 'react-redux'
import passwordAction from '../actions/actionPasswordManager'

const containerFix = {
  marginTop: '10px'
}

class AddPassword extends Component {
  constructor(props) {
    super()
    this.state = {
      url: '',
      username: '',
      password: ''
    }
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler() {
    this.props.addPassword(this.state)
  }

  deleteHandler(item) {
    this.props.removePassword(item)
  }

  render() {
    return (
      <div className="container" style={containerFix}>
        <div className="column is-half is-offset-one-quarter">
          <table className="table is-hoverable" style={{textAlign: 'center'}}>
            <thead>
              <tr>
                <th>#</th>
                <th>Url</th>
                <th>Username</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { this.props.getPassword.map((password, i) => {
                return (
                  <tr key={i}>
                    <th>{i+1}</th>
                    <td>{password.url}</td>
                    <td>{password.username}</td>
                    <td>{password.password}</td>
                    <td>
                      <a className="button is-warning is-small">
                        Edit
                      </a>
                      <a className="button is-danger is-small" onClick={ () => this.deleteHandler(password)}>
                        Delete
                      </a>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="field">
          <label className="label">URL</label>
          <div className="control">
            <input className="input" type="text" placeholder="http://hacktiv8.com" onChange={ (e) => this.setState({ url: e.target.value }) } />
          </div>
        </div>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input className="input" type="text" placeholder="username" onChange={ (e) => this.setState({ username: e.target.value }) } />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" placeholder="********" onChange={ (e) => this.setState({ password: e.target.value }) }/>
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
