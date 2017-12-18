import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { deleteData } from '../actions'

class TableExamplePagination extends Component {
  constructor () {
    super()
  }
  deleteUserData (userID) {
    var r = window.confirm("Yakin ngapus tong?!");
    if (r === true) {
      this.props.deleteData(userID)
    }
  }
  render () {
    console.log('di render =====', this.props)
    return (
      this.props.usersData === null? (
        <p>Mohon Tunggu</p>
      ) : (
        <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>URL</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Password</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Object.keys(this.props.usersData).map((key, index) => {
            const tempData = this.props.usersData[key]
            return (
              <Table.Row>
                <Table.Cell>{this.props.usersData[key].url}</Table.Cell>
                <Table.Cell>{this.props.usersData[key].username}</Table.Cell>
                <Table.Cell>{this.props.usersData[key].password}</Table.Cell>
                <Table.Cell>
                  <Button content='Update' primary />
                  <Button content='Delete' secondary onClick={() => this.deleteUserData(key)} />
                </Table.Cell>
            </Table.Row>
            )
          })}
        </Table.Body>
        <Table.Footer>
        </Table.Footer>
      </Table>
      )
    )
  }
  componentWillMount () {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteData: (userID) => dispatch(deleteData(userID))
  }
}

function mapStateToProps(state) {
  console.log('mapstate =====', state)
  return {
    usersData: state.userData
  }
}

const CrudTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableExamplePagination)

export default CrudTable
