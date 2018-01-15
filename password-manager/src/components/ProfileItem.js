import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './../App.css';
import { deleteDataProfile } from '../actions/profileAction'

class ProfileItem extends Component {
  constructor() {
    super()
    this.state = {
      profileedit: ''
    }
  }
  deleteData(keyProfile) {
    this.props.deleteData(keyProfile)
  }

  editaData(profile) {
    this.setState({
      profileedit: profile
    })
  }
  render() {
    return (
      <div className="text-center" style={{ margin: '20px 0px' }}>
        <div className="container">
          <div className="row row-centered">
            <div className="col-md-6 col-centered">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>URL</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Created  At</th>
                    <th>Updated At</th>
                    <th rowSpan="2">Action</th>
                  </tr>
                </thead>
                <tbody className="text-left">
                  {this.props.profiles.map((profile, index) => {
                    return (
                      <tr key={index}>
                        <td>{profile.url}</td>
                        <td>{profile.username}</td>
                        <td>{profile.password}</td>
                        <td>{profile.createdAt}</td>
                        <td>{profile.updatedAt}</td>
                        <td>
                          <button className="btn btn-danger" onClick={() => this.deleteData(profile.key)}>Delete</button>
                        </td>
                        <td>
                          <Link to={`/list/${profile.key}`}>
                            <button className="btn btn-info" >Edit Data</button>
                          </Link>
                        </td>

                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteData: (index) => dispatch(deleteDataProfile(index))
  }
}
export default connect(null, mapDispatchToProps)(ProfileItem)
