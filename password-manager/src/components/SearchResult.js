import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from './Header'
import ProfileItem from './ProfileItem'
class SearchResult extends Component {
  render() {
    return (
      <div className="text-center">
        <Header />
        <ProfileItem profiles={this.props.profiles} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profiles: state.profileReducer.profile
  }
}


export default connect(mapStateToProps, null)(SearchResult)

