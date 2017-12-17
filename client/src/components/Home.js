import React from 'react'
import { connect } from 'react-redux'
import { get_user_all } from '../actions/index'
import firebase from 'firebase'
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
  //ANEH DI APP MAU
  componentDidMount () {
      return firebase.database().ref().child('reactpwdmngr/user').on('value', snapshot => {
        let obj = []
        for (var idx in snapshot.val()) {
          obj.push({
            id: idx,
            url: snapshot.val()[idx].url,
            username: snapshot.val()[idx].username,
            password: snapshot.val()[idx].password,
            createdAt: snapshot.val()[idx].createdAt,
            updatedAt: snapshot.val()[idx].updatedAt
          })
        }
        // dispatch(get_user_all(obj))
        console.log('isi obj', obj);
      })
  }

  componentWillMount () {
    console.log('INI DI WILL MOUNT');
    this.props.get_user_all()
  }

  render () {
    return (
        <div className="container-fluid">
           <div id="custom-search-input">
              <div className="input-group col-md-12">
                  <input type="text" className="  search-query form-control" placeholder="Search" />
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
                <tr>
                  <td>{this.state.url}</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <td>John</td>
                  <td>John</td>
                  <th><span className=" glyphicon glyphicon-pencil"></span></th>
                  <th><span className=" glyphicon glyphicon-trash"></span></th>
                </tr>
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
    get_user_all: () => dispatch(get_user_all())
  }
}

export default connect (mapState,mapAction)(Home)
