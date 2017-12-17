import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from './Header'
import { getDataProfile } from '../actions/profileAction'
class SearchResult extends Component {


  
  render() {
    return (
      <div className="text-center">
        <Header />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profiles: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => dispatch(getDataProfile(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)

