import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from './Header'
import Search from './Search'
import Back from './ButtonBacktoForm'
import { fetchDataProfile, getDataProfile } from '../actions/profileAction'
import ProfileItem from './ProfileItem'

class DataListProfile extends Component {
  componentWillMount() {
    this.props.fetchData()
  }
  render() {
    return (
      <div className="text-center">
        <Header />
        <Back />
        <Search profiles={this.props.profile} />
        <ProfileItem profiles={this.props.profile} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: (profile) => dispatch(getDataProfile(profile)),
    fetchData: () => dispatch(fetchDataProfile())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DataListProfile)

