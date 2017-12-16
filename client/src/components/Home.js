import React from 'react'
import { connect } from 'react-redux'
import { get_user_all } from '../actions/'


class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount () {
    this.props.get_user_all()
  }

  render () {
    return (
        <div className="container">
          <div className="row">
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
          </div>
          <div className="row">
          <table border="2px">
            <thead>
              <tr>
                <th>URL</th>
                <th>USERNAME</th>
                <th>PASSWORD</th>
                <th>CREATEDAT</th>
                <th>UPDATEDAT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>HARY</td>
                <td>HARY123</td>
                <td>10:10</td>
                <td>23:10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  console.log('INI STATE', state.user);
  return {
    user: state.user
  }
}

const mapAction = (dispatch) => {
  return {
    get_user_all: () => dispatch(get_user_all())
  }
}

export default connect (mapState,mapAction)(Home)
