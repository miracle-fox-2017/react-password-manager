import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAccounts, deleteAccount, editAccount } from '../actions/actionManager'
import Form from '../components/Form'
// import { EditModal } from '../components/EditModal'
class TableWidget extends React.Component{
  constructor() {
    super ()
    this.state = {
      account: {
        id: '',
        url: '',
        username: '',
        password: '',
        createdAt: '',
        updatedAt: ''
      }
    }
    this.onChangeState = this.onChangeState.bind(this)
    this.setHandleEdit = this.setHandleEdit.bind(this)
  }

  onClickDelete (id) {
    this.props.onDelete(id)
  }

  onClickEdit (index) {
    this.setState({
      account: {
        id: this.props.accounts[index].id,
        url: this.props.accounts[index].url,
        username: this.props.accounts[index].username,
        password: this.props.accounts[index].password,
        createdAt: this.props.accounts[index].createdAt,
        updatedAt: new Date()
      }
    })

  }

  setHandleEdit (e) {
    e.preventDefault();
    // console.log(this.state.account)
    this.props.editTheAccount(this.state.account.id, this.state.account)
  }

  onChangeState (e) {
    let state = this.state.account
    state[e.target.name] = e.target.value
   
    this.setState(state)
  }
  render () {
    const { url, username, password} = this.state.account
    return (
      <div className="container-fluid">
      <Form/>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Url</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">CreatedAt</th>
            <th scope="col">UpdatedAt</th>
            <th scope="col">Action</th>
          </tr>
        </thead>  
        <tbody>
          { this.props.accounts.map((account, index) => {
            return (
              <tr className="table-success" key={index}>
                <td>{account.url}</td>
                <td>{account.username}</td>
                <td>{account.password}</td>
                <td>{account.createdAt}</td>
                <td>{account.updatedAt}</td>
                <td><button type="button" className="btn btn-danger" onClick={(id) => {this.onClickDelete(account.id)}}>Delete</button> 
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={(data) => {this.onClickEdit(index)}}>
                    Edit
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table> 
      <div> 
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit= {this.setHandleEdit}>
                  <fieldset>
                    <div className="form-group">
                      <label>URL</label>
                      <input type="text" className="form-control" name="url" value={url} onChange= {this.onChangeState}/>
                    </div>
                    <div className="form-group">
                      <label>Uername</label>
                      <input type="text" className="form-control" name="username" value={username} onChange= {this.onChangeState}/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" name="password" value={password} onChange= {this.onChangeState}/>
                    </div>
                    <button className="ui button" type="submit">Save</button>
                  </fieldset>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        
     


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
  getAllAccounts: () => dispatch(getAccounts()),
  onDelete: (id) => dispatch(deleteAccount(id)),
  editTheAccount: (id, newAccount) => dispatch(editAccount(id, newAccount))
})

export default connect(mapStateToProps, mapDispatchToProps)(TableWidget)