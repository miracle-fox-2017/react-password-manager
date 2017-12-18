/* eslint-disable max-len */

import React, { Component } from 'react'
import { Container, Header, Input } from 'semantic-ui-react'
import Tabledata from './Tabledata'
import { connect } from 'react-redux'
import { searchData } from '../actions'

class ContainerTimeline extends Component {
  handleSearch (e) {
    this.props.searchData(e.target.value)
  }
  render(){
    return(
      <div>
        <Container>
          <Header as='h2'>Password Manager by AhmadNizar</Header>
          <Input icon='search' placeholder='Search...' onChange={(e) => this.handleSearch(e)} />
          <Tabledata/>
        </Container>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchData: (inputStr) => {
      dispatch(searchData(inputStr))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ContainerTimeline)
