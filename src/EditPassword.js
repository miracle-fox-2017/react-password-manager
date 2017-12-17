import React, { Component } from 'react';
import {connect} from 'react-redux'
import {updatepassword} from './actions/passwordlist'
import {Link} from 'react-router-dom'
import history from './history';

class EditPassword extends Component {

  constructor(props) {
    super(props)

    this.state = {
      newpass: {
        URL: '',
        username: '',
        password: '',
      }
    }
    console.log('ini dari edit', props.match.params.id)
  }

  componentWillMount() {
    let newpass = Object.assign({}, this.state.newpass);
    newpass.URL = this.props.location.state.editpass.URL
    newpass.username = this.props.location.state.editpass.username
    newpass.password = this.props.location.state.editpass.password
    this.setState({newpass})
  }

  handleChange = (e) => {
    let newpass = Object.assign({}, this.state.newpass);
    newpass[e.target.name] = e.target.value
    this.setState({newpass})
    console.log(this.state.newpass.URL)
  }

  handleUpdate =(e) => {
    e.preventDefault()
    this.props.updatepassword(this.state.newpass, this.props.match.params.id)
    this.props.history.push('/')
    let newpass = Object.assign({}, this.state.newpass);
    newpass.URL = ''
    newpass.username = ''
    newpass.password = ''
    this.setState({newpass})
  }

  render() {
    return (
        <div className="container">
        <form onSubmit={this.handleUpdate}>
          <fieldset>
            <legend>Password Form</legend>
            <div className="form-group">
              <label htmlFor="URL">URL</label>
              <input type="text" className="form-control" id="URL" aria-describedby="emailHelp" placeholder="URL" name="URL" defaultValue={this.state.newpass.URL} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input type="text" className="form-control" id="username" placeholder="username" name="username" defaultValue={this.state.newpass.username} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="passwordkunci">Password</label>
              <input type="password" className="form-control" id="passwordkunci" placeholder="Password" name="password" defaultValue={this.state.newpass.password} onChange={this.handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatepassword: (newpass, key) => dispatch(updatepassword(newpass, key))
  }
}

const connectedEditpassword = connect(null, mapDispatchToProps)(EditPassword)
export default connectedEditpassword
