import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header } from 'semantic-ui-react'
import Table from './Table'
import { getUsers } from '../actions/homeActions'
import firebase from 'firebase'

class HomePage extends Component {
  componentWillMount() {
    this.props.getUsers()
  }

  render() {
    return (
      <Container>
        <Header as='h2' dividing>
          Password List
        </Header>
        <Table users={this.props.users} />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.home.users
  }
}

const mapsDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers)
  }
}

export default connect(mapStateToProps, mapsDispatchToProps)(HomePage)