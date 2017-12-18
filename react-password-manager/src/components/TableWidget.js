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
      },
      search: '',
      errors: []
    }
    this.onChangeState = this.onChangeState.bind(this)
    this.setHandleEdit = this.setHandleEdit.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  onClickDelete (id) {
    this.props.onDelete(id)
  }

  onClickEdit (index) {
    let date = new Date()
    this.setState({
      account: {
        key: this.props.accounts[index].key,
        url: this.props.accounts[index].url,
        username: this.props.accounts[index].username,
        password: this.props.accounts[index].password,
        createdAt: this.props.accounts[index].createdAt,
        updatedAt: date.toString()
      },
      errors: []
    })
  }

  setPassword (password) {
    this.setState({
      error: [
        {
          status: false,
          text: 'Password should must contain number'
        },
        {
          status: false,
          text: 'Password should must contain character'
        },
        {
          status: false,
          text: 'Password should must contain Uppercase'
        },
        {
          status: false,
          text: 'Password should must contain special character (@#$%^&*)'
        },
        {
          status: false,
          text: 'Password length should more than 8'
        }
      ]
    })

  }

  setHandleEdit (e) {
    e.preventDefault();
    // console.log(this.state)
    this.props.editTheAccount(this.state.account.key, this.state.account)
  }

  onChangeState (e) {
    let state = this.state.account
    state[e.target.name] = e.target.value
    this.setState(state)

    this.setState({
      errors: [
        {
          status: false,
          text: 'Password should must contain number'
        },
        {
          status: false,
          text: 'Password should must contain character'
        },
        {
          status: false,
          text: 'Password should must contain Uppercase'
        },
        {
          status: false,
          text: 'Password should must contain special character (@#$%^&*)'
        },
        {
          status: false,
          text: 'Password length should more than 8'
        }
      ]
    })

    let setPassword = this.state.account.password.split("")
    let uppercase = /[A-Z]/
    let character = /[a-z]/
    let number = /\d/
    let char = /[@#$%^&*]/

    if (setPassword.length >= 8){
      this.setState(state => {
        state.errors[4].status = true
      })
    }

    setPassword.map(pass => {
      if(number.test(pass)){
        this.setState(state => {
          state.errors[0].status = true
        })
      } else if (character.test(pass)) {
        this.setState(state => {
          state.errors[1].status = true
        })
      } else if (uppercase.test(pass)) {
        this.setState(state => {
          state.errors[2].status = true
        })
      } else if (char.test(pass)) {
        this.setState(state => {
          state.errors[3].status = true
        })
      }

    })

  }

  handleSearch (e) {
    this.setState({
      search: e.target.value
    })

  }

  
  render () {
    console.log(this.props.accounts[0])
    const { url, username, password} = this.state.account
    const searchName = this.props.accounts.filter(
      (account) => {
        return account.username.indexOf(this.state.search) !== -1
      }
    )
    
    return (
      <div className="container-fluid">
      <div>
        <Form/>
        <hr/>
        <br/>
      </div>
      <div>
        <div className="form-group">
          <label>Search by</label>
          <input type="text" className="form-control" placeholder="name ..." onChange={this.handleSearch}/>
        </div>
      </div>
      
      
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
          { searchName.map((account, index) => {
            return (
              <tr className="table-success" key={index}>
                <td>{account.url}</td>
                <td>{account.username}</td>
                <td>{account.password}</td>
                <td>{account.createdAt}</td>
                <td>{account.updatedAt}</td>
                <td><button type="button" className="btn btn-danger" onClick={(id) => {this.onClickDelete(account.key)}}>Delete</button> 
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
                    <div>
                      <h3>Password Strength: </h3>
                      <table class="table table-hover">
                        <tbody>
                          <th scope="row">status</th>
                          { this.state.errors.map((error, index) => {
                            return (
                              <tr key={index}>
                                <td>{error.status ? "contain" :"not contain"}</td>
                                <td>{error.text}</td>
                              </tr>
                            )
                          })}
                        
                        </tbody>
                      </table>
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