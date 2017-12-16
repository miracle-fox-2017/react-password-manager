import React from 'react'
import { connect } from 'react-redux'
import { Container, Header } from 'semantic-ui-react'
import Table from './Table'

const HomePage = (props) => {
  return (
    <Container>
      <Header as='h2' dividing>
        Password List
      </Header>
      <Table users={props.users} />
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.home.users
  }
}

export default connect(mapStateToProps, null)(HomePage)