import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchallpassword} from './actions/passwordlist'
import {deletepassword} from './actions/passwordlist'

class Tablepassword extends Component {

  componentWillMount() {
    this.props.fetchallpassword()
  }

  handledelete(key) {
    this.props.deletepassword(key)
  }

  render() {
    return (
      <div style={{marginTop:40+'px'}}>
        <table className="table table-hover">
          <thead>
            <tr className="table-danger">
              <th scope="col">URL</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">CreatedAt</th>
              <th scope="col">UpdatedAt</th>
              <th scope="col">Actions</th>

            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props.passwordlist).map((key) => {
              return (
                <tr key={key}>
                  <td>{this.props.passwordlist[key].URL}</td>
                  <td>{this.props.passwordlist[key].username}</td>
                  <td>{this.props.passwordlist[key].password}</td>
                  <td>{this.props.passwordlist[key].createdat}</td>
                  <td>{this.props.passwordlist[key].updatedat}</td>
                  <td><button type="button" className="btn btn-danger" onClick={() => this.handledelete(key)}>delete</button></td>
                  <td><button type="button" className="btn btn-danger" data-toggle="modal" data-target="editmodal">edit</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="modal fade" id="editmodal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Save changes</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('ini dari tablecomponent', state.passwordlistReducer.passwordlist['-L0QEShhexcqlvSZc25T']);
  return {
    passwordlist: state.passwordlistReducer.passwordlist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchallpassword: () => dispatch(fetchallpassword()),
    deletepassword: (key) => dispatch(deletepassword(key))
  }
}

const connectedTablepassword = connect(mapStateToProps, mapDispatchToProps)(Tablepassword)
export default connectedTablepassword
