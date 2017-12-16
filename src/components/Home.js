import React from 'react'
import { connect } from 'react-redux'

function Home(props) {
  return (
    <div>
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
            { props.getPassword.map((password, i) => {
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
                    <a className="button is-danger is-small">
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

const mapStateToProps = state => {
  return {
    getPassword: state.passwordManager.passwordStore
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
