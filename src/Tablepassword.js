import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchallpassword} from './actions/passwordlist'
import {deletepassword} from './actions/passwordlist'
import {searchallpassword} from './actions/passwordlist'
import {Link} from 'react-router-dom'

class Tablepassword extends Component {

  constructor() {
    super()

    this.state = {
      cari: ''
    }
  }

  componentWillMount() {
    this.props.fetchallpassword()
  }

  handledelete(key) {
    this.props.deletepassword(key)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log(this.state.cari)
  }

  handleSearch = (e) => {
    e.preventDefault()
    if(this.state.cari == '') {
      this.props.fetchallpassword()
    }
    else {
      this.props.searchallpassword(this.state.cari)
    }
    
  }

  validatefield

  render() {
    var bodytable
    if(this.props.passwordlist) {
      bodytable =           <tbody>
                  {Object.keys(this.props.passwordlist).map((key) => {
                    return (
                      <tr key={key}>
                        <td>{this.props.passwordlist[key].URL}</td>
                        <td>{this.props.passwordlist[key].username}</td>
                        <td>{this.props.passwordlist[key].password}</td>
                        <td>{new Date(this.props.passwordlist[key].createdat).toLocaleDateString()}</td>
                        <td>{new Date(this.props.passwordlist[key].updatedat).toLocaleDateString()}</td>
                        <td><button type="button" className="btn btn-danger" onClick={() => this.handledelete(key)} style={{marginRight:20}}>delete</button><Link to={{pathname: key, state: {editpass: this.props.passwordlist[key], key: key}}}><button type="button" className="btn btn-danger" data-toggle="modal" data-target="editmodal">edit</button></Link></td>
                      </tr>
                    )
                  })}
                </tbody>
    } else {
      bodytable = <tbody></tbody>
    }
    return (
      <div style={{marginTop:40+'px'}}>
        <form onSubmit={this.handleSearch}>
          <fieldset>
            <div class="form-group">
              <label for="exampleInputEmail1">Search</label>
              <input type="text" class="form-control" name="cari" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Pencarian URL" value={this.state.cari} onChange={this.handleChange}/>
              <small id="emailHelp" class="form-text text-muted">Masukkan kata kunci pencarian</small>
              <button type="submit" className="btn btn-primary">cari</button>
            </div>
          </fieldset>
        </form>
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
          {bodytable}
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    passwordlist: state.passwordlistReducer.passwordlist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchallpassword: () => dispatch(fetchallpassword()),
    deletepassword: (key) => dispatch(deletepassword(key)),
    searchallpassword: (cari) => dispatch(searchallpassword(cari))
  }
}

const connectedTablepassword = connect(mapStateToProps, mapDispatchToProps)(Tablepassword)
export default connectedTablepassword
