import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import passwordAction from '../actions/actionPasswordManager'

const containerFix = {
  marginTop: '10px'
}

class Home extends Component {
  constructor(props) {
    super()
    this.state = {
      allPassword: [],
      url: '',
    }
    this.submitHandler = this.submitHandler.bind(this)
    this.clearUrl = this.clearUrl.bind(this)
  }

  submitHandler(url) {
    let newManipulator = this.state.allPassword.filter(password => {
      return password.url === this.state.url
    })
    this.setState({
      url: '',
      allPassword: newManipulator
    })
  }

  deleteHandler(item) {
    let newArrs = this.state.allPassword.filter(function(pass) {
      return pass.id !== item.id
    })
    this.setState({
      url: '',
      allPassword: newArrs
    })
    this.props.removePassword(item)
  }

  clearUrl(){
    this.setState({
      url: '',
      allPassword: this.props.getPassword
    })
  }

  componentWillMount(){
    this.props.getPasswords()
    // this.setState({
    //   allPassword: this.props.getPassword
    // })
  }

  render() {
    return (
      <div className="container" style={containerFix}>
        <div className="column">
          <div className="field">
            <label className="label">Find by URL</label>
          </div>
          <div className="field has-addons">
            <p className="control">
              <a className="button is-static">
                http://
              </a>
            </p>
            <div className="control">
              <input value={this.state.url} className="input" type="text" placeholder="hacktiv8.com" onChange={ (e) => this.setState({ url: e.target.value }) } />
            </div>
            <div className="control">
              <button onClick={this.submitHandler} className="button is-info"><i className="fa fa-search" aria-hidden="true"></i></button>
              <button onClick={this.clearUrl} className="button is-white"><i className="fa fa-refresh" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
        <div className="column">
          <table className="table is-hoverable" style={{textAlign: 'center'}}>
            <thead>
              <tr>
                <th>#</th>
                <th>Url</th>
                <th>Username</th>
                <th>Password</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { this.props.getPassword.map((password, i) => {
                return (
                  <tr key={i+password.id}>
                    <th>{i+1}</th>
                    <td>{password.url}</td>
                    <td>{password.username}</td>
                    <td>{password.password.substring(0, 2) + '*****' + password.password.substring(password.password.length-2, password.password.length)}</td>
                    <td>{password.createdAt.toString()}</td>
                    <td>{password.updatedAt.toString()}</td>
                    <td>
                      <Link to={"/edit/"+password.id} className="button is-warning is-small">
                        Edit
                      </Link>
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
    getPasswords: () => dispatch(passwordAction.getPassword()),
    addPassword: (payload) => dispatch(passwordAction.addPassword(payload)),
    removePassword: (payload) => dispatch(passwordAction.removePassword(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
