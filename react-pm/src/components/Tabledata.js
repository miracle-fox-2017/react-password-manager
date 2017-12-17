import React, { Component } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { connect } from 'react-redux';

class TableExamplePagination extends Component {
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
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Object.keys(this.props.usersData).map(key => {
            return <p>{key}</p>                                                                                                                                                                                                      
          })}                                                                                                                        
          {/* <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row> */}
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

function mapStateToProps(state) {
  console.log('mapstate =====', state)
  return {
    usersData: state.userData
  }
}

const CrudTable = connect(
  mapStateToProps,
  null
)(TableExamplePagination)

export default CrudTable
