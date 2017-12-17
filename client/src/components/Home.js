import React from 'react'
import { connect } from 'react-redux'
import { get_user_all } from '../actions/index'
//TESTER
import firebase from 'firebase'
import { config } from '../config'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      url: '',
      username: '',
      password: '',
      createdAt: '',
      updatedAt: '',
      data: []
    }
    this.app = firebase.initializeApp(config)
    this.database = this.app.database().ref().child('reactpwdmngr/user')
  }

  componentDidMount () {
    this.database.on('value', snapshot => {
      console.log('INI SNAPSHOT', snapshot);

    })
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
                  <td>{this.state.data}</td>
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

}

const mapAction = (dispatch) => {

}

export default connect (null,null)(Home)
