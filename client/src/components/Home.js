import React from 'react'
import { connect } from 'react-redux'
import { get_user_all, delete_user, getUserAPI } from '../actions/index'
import firebase from 'firebase'
import { Route, Link } from 'react-router-dom'


class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      url : '',
      username: '',
      password: '',
      createdAt: '',
      updatedAt: ''
    }
  }

  handleSearch (event) {

  }

  delete (id) {
    console.log('masuk sini',id);
    this.props.delete_user(id);
  }
  //ANEH DI APP MAU
  componentWillMount () {
    this.props.getUserAPI()
  }

  render () {
    return (
        <div className="container-fluid">
           <div id="custom-search-input">
              <div className="input-group col-md-12">
                  <input type="text" className="  search-query form-control" placeholder="Search"/>
                  <span className="input-group-btn">
                      <button className="btn btn-danger" type="button">
                          <span className=" glyphicon glyphicon-search"></span>
                      </button>
                  </span>
              </div>
            </div>

            <h2>Basic Table</h2>
            <table className="table" border="2px">
              <thead>
                <tr>
                  <th>URL</th>
                  <th>USERNAME</th>
                  <th>PASSWORD</th>
                  <th>CREATEDAT</th>
                  <th>UPDATEAT</th>
                  <th colSpan="2">ACTION</th>
                </tr>
              </thead>
              <tbody>
              {this.props.user.map((data, index)=> {
                console.log('isi data', data);
                return(
                  <tr>
                  <td>{data.url}</td>
                  <td>{data.username}</td>
                  <td>{data.password}</td>
                  <td>{data.createdAt}</td>
                  <td>{data.updatedAt}</td>
                  <td><Link to={'/' + data.id}><p onClick={()=> this.edit(data.id)}><span className=" glyphicon glyphicon-pencil"></span></p></Link></td>
                  <td><a href="#"><p onClick={ ()=> this.delete(data.id)}><span className=" glyphicon glyphicon-trash"></span></p></a></td>
                  </tr>
                )
              })}
              </tbody>
            </table>
      </div>
    )
  }
}
const mapState = (state) => {
  console.log('INI DI STATE', state);
  return {
    user: state.Form.form
  }
}

const mapAction = (dispatch) => {
  return {
    getUserAPI: () => dispatch(getUserAPI()),
    delete_user: (id) => dispatch(delete_user(id))
  }
}

export default connect (mapState,mapAction)(Home)
