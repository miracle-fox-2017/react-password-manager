import React, { Component } from 'react';
import {connect} from 'react-redux'
import {savepassword} from './actions/passwordlist'

class Addpassword extends Component {
  constructor() {
    super()

    this.state = {
      newpass: {
        URL: '',
        username: '',
        password: ''
      }
    }
  }

  handleChange = (e) => {
    let newpass = Object.assign({}, this.state.newpass);
    newpass[e.target.name] = e.target.value
    this.setState({newpass})
  }

  handleSave =(e) => {
    e.preventDefault()
    this.props.savepassword(this.state.newpass)

    let newpass = Object.assign({}, this.state.newpass);
    newpass.URL = ''
    newpass.username = ''
    newpass.password = ''
    this.setState({newpass})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSave}>
          <fieldset>
            <legend>Password Form</legend>
            <div className="form-group">
              <label htmlFor="URL">URL</label>
              <input type="text" className="form-control" id="URL" aria-describedby="emailHelp" placeholder="URL" name="URL" value={this.state.newpass.URL} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input type="text" className="form-control" id="username" placeholder="username" name="username" value={this.state.newpass.username} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="passwordkunci">Password</label>
              <input type="password" className="form-control" id="passwordkunci" placeholder="Password" name="password" value={this.state.newpass.password} onChange={this.handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    savepassword: (newpass) => dispatch(savepassword(newpass))
  }
}

const connectedAddpassword = connect(null, mapDispatchToProps)(Addpassword)
export default connectedAddpassword
