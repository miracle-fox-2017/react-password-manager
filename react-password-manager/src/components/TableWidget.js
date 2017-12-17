import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAccounts } from '../actions/actionManager'
class TableWidget extends React.Component{

  render () {
    console.log('masuk',this.props.accounts)
    return (
      <div className="container-fluid">
      <Link to="/add">Add</Link>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Url</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
          </tr>
        </thead>  
        <tbody>
          { this.props.accounts.map((account, index) => {
            return (
              <tr className="table-success" key={index}>
                <td>{account.url}</td>
                <td>{account.username}</td>
                <td>{account.password}</td>
              </tr>
            )
          })}
        </tbody>
      </table> 

      
      </div>
    )
  }

  componentWillMount () {
    this.props.getAllAccounts()
  }
}

const mapStateToProps = (state) => {
  console.log('----------1state', state)
  return {
    accounts: state.accounts
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAllAccounts: () => dispatch(getAccounts())
})

export default connect(mapStateToProps, mapDispatchToProps)(TableWidget)