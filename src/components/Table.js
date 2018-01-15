import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'

class TableExampleSelectableRow extends Component {

  deleteHandle(key) {
    firebase.database().ref('passwordlist/'+key).remove()
  }

  render() {
    return (
      <Table celled selectable unstackable color={'orange'}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={3}>URL</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Password</Table.HeaderCell>
            <Table.HeaderCell>CreatedAt</Table.HeaderCell>
            <Table.HeaderCell>UpdatedAt</Table.HeaderCell>
            <Table.HeaderCell width={2}></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.users.map(user => {
            return  <Table.Row key={user.key}>
                      <Table.Cell>{user.url}</Table.Cell>
                      <Table.Cell>{user.username}</Table.Cell>
                      <Table.Cell>{user.password}</Table.Cell>
                      <Table.Cell>{user.createdAt}</Table.Cell>
                      <Table.Cell>{user.updatedAt}</Table.Cell>
                      <Table.Cell>
                        <Button.Group fluid>
                          <Button positive as={Link} to={'/edit/'+user.key}>Edit</Button>
                          <Button negative onClick={() => this.deleteHandle(user.key)}>Delete</Button>
                        </Button.Group>
                      </Table.Cell>
                    </Table.Row>
          })}
        </Table.Body>
      </Table>
    )
  }
}

export default TableExampleSelectableRow