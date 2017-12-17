import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Loader } from 'semantic-ui-react'
import Table from './Table'
import { getUsers } from '../actions/homeActions'

class HomePage extends Component {
  componentWillMount() {
    this.props.getUsers()
  }

  render() {
    let content
    if(this.props.users) {
      content = <Table users={this.props.users} />      
    } else {
      content = <Loader active inline='centered' />
    }
    return (
      <Container>
        <Header as='h2' dividing>
          Password List
        </Header>
        {content}
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