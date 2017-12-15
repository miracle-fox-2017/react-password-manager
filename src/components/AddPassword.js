import React, { Component } from 'react'

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
    console.log('hi', this.state)
  }

  render() {
    return (
      <div className="container" style={containerFix}>


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

export default AddPassword
