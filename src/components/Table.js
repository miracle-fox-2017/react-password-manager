import React from 'react'
import { Table } from 'semantic-ui-react'

const TableExampleSelectableRow = (props) => (
  <Table celled selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>URL</Table.HeaderCell>
        <Table.HeaderCell>Username</Table.HeaderCell>
        <Table.HeaderCell>Password</Table.HeaderCell>
        <Table.HeaderCell>CreatedAt</Table.HeaderCell>
        <Table.HeaderCell>UpdatedAt</Table.HeaderCell>
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
                </Table.Row>
      })}
    </Table.Body>
  </Table>
)

export default TableExampleSelectableRow