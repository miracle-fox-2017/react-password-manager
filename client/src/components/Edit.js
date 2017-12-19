import React from 'react'
import { connect } from 'react-redux'
import { edit_user } from '../actions'

class Edit extends React.Component {
  constructor (props) {
    super(props)

    this.state =  {
      id: '',
      url: '',
      username: '',
      password: '',
      updatedAt: ''
    }
    this.editUrl = this.editUrl.bind(this)
    this.editUsername = this.editUsername.bind(this)
    this.editPassword = this.editPassword.bind(this)
    this.edituser = this.edituser.bind(this)
  }

  editUrl (e) {
    this.setState({url: e.target.value})
  }

  editUsername (e) {
    this.setState({username: e.target.value})
  }

  editPassword (e) {
    this.setState({password: e.target.value})
  }

  tanggal (date) {
      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      var hours = date.getHours();
      var minutes = date.getMinutes()
      return day +' '+ monthNames[monthIndex] +' '+ year +' pukul '+hours +':'+ minutes;
  }

  edituser () {
    let edit = {
      url : this.state.url,
      username: this.state.username,
      password: this.state.password,
      createdAt: this.tanggal(new Date()),
      updatedAt: this.tanggal(new Date())
    }
    this.props.editUser(edit)
  }

  render () {
    return (
      <div className="container">
      <form className="form-horizontal">
        <fieldset>
          <div className="form-group">
            <label htmlFor="url" className="col-lg-2 control-label">URL</label>
            <div className="col-lg-10">
              <input className="form-control" value={this.props.data.url} onChange={this.editUrl} id="url" placeholder="http://hacktiv8.com/ " type="text"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username" className="col-lg-2 control-label">Username</label>
            <div className="col-lg-10">
              <input className="form-control" value={this.props.data.username} onChange={this.editUsername} id="username" placeholder="Rizafahmi" type="text"/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="col-lg-2 control-label">Password</label>
            <div className="col-lg-10">
              <input className="form-control" value={this.props.data.password} onChange={this.editPassword} id="password" placeholder="*******" type="password"/>
            </div>
          </div>

          <div className="form-group">
            <div className="col-lg-10 col-lg-offset-2">
              <button type="submit" onClick={this.editUser} className="btn btn-primary">Edit</button>
            </div>
          </div>
        </fieldset>
        </form>
      </div>
    )
  }
}

const mapState = (state,props) => {
  let hasil = state.Form.form.find(user => user.id === props.match.params.id)
  return {
    id: props.match.params.id,
    data: hasil
  }
}

const mapAction = (dispatch) => {
  return {
    edit_user: (edit) => dispatch(edit_user(edit))
  }
}

export default connect (mapState, mapAction)(Edit)
