import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const TableExampleSelectableRow = (props) => (
  <Table celled selectable unstackable color={'orange'}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>URL</Table.HeaderCell>
        <Table.HeaderCell>Username</Table.HeaderCell>
        <Table.HeaderCell>Password</Table.HeaderCell>
        <Table.HeaderCell>CreatedAt</Table.HeaderCell>
        <Table.HeaderCell>UpdatedAt</Table.HeaderCell>
        <Table.HeaderCell width={2}></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {props.users.map(user => {
        return  <Table.Row key={user.id}>
                  <Table.Cell>{user.url}</Table.Cell>
                  <Table.Cell>{user.username}</Table.Cell>
                  <Table.Cell>{user.password}</Table.Cell>
                  <Table.Cell>{user.createdAt}</Table.Cell>
                  <Table.Cell>{user.updatedAt}</Table.Cell>
                  <Table.Cell>
                    <Button.Group fluid>
                      <Button positive as={Link} to={'/edit/'+user.id}>Edit</Button>
                      <Button negative as={Link} to={'/delete/'+user.id}>Delete</Button>
                    </Button.Group>
                  </Table.Cell>
                </Table.Row>
      })}
    </Table.Body>
  </Table>
)

export default TableExampleSelectableRow