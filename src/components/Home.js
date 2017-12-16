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
      url: '',
      username: '',
      password: ''
    }
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler() {
    this.props.addPassword(this.state)
    this.setState({
      url: '',
      username: '',
      password: ''
    })
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
                  <tr key={password.id}>
                    <th>{i+1}</th>
                    <td>{password.url}</td>
                    <td>{password.username}</td>
                    <td>{password.password}</td>
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
    addPassword: (payload) => dispatch(passwordAction.addPassword(payload)),
    removePassword: (payload) => dispatch(passwordAction.removePassword(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
