import React, { Component } from 'react'
import { Table, Button, Modal, Form, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { deleteData, setUpdate } from '../actions'

class TableExamplePagination extends Component {
  constructor(){
  	super();
  	this.state = {
      open: false
    }
  }
  show = (dimmer, key) => () => {
    this.setState({ dimmer, open: true })
    this.setModalUpdate(key)
  }
  close = () => this.setState({ open: false })
  deleteUserData (userID) {
    var r = window.confirm("Yakin ngapus tong?!");
    if (r === true) {
      this.props.deleteData(userID)
    }
  }
  setModalUpdate (userID) {
    this.props.setUpdate(userID)
  }
  render () {
    const { open, dimmer } = this.state
    return (
      this.props.usersData === null? (
        <p>Mohon Tunggu</p>
      ) : (
      <div>
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
              return (
                <Table.Row key={index}>
                  <Table.Cell>{this.props.usersData[key].url}</Table.Cell>
                  <Table.Cell>{this.props.usersData[key].username}</Table.Cell>
                  <Table.Cell>{this.props.usersData[key].password}</Table.Cell>
                  <Table.Cell>
                    <Button content='Update' primary onClick={this.show('blurring', key)}/>
                    <Button content='Delete' secondary onClick={() => this.deleteUserData(key)} />
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
          <Table.Footer>
          </Table.Footer>
      </Table>
      <Modal dimmer={dimmer} open={open} onClose={this.close}>
        <Modal.Header>Save Your Credential Data</Modal.Header>
        <Modal.Content>
        <Form>
          <Form.Field>
            <label>URL</label>
            <input type='text' placeholder='Your URL' name='url' value={this.props.updatedData.url}/>
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <input type='text' placeholder='Username' name='username' value={this.props.updatedData.username}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type='password' placeholder='Password' name='password' value={this.props.updatedData.password}/>
          </Form.Field>
          <Form.Field>
            <p>Ini tempat password</p>
            <Checkbox label='Memiliki satu karakter huruf besar.' checked={this.state.upperCasePassword} /><br/>
            <Checkbox label='Memiliki satu karakter huruf kecil.' checked={this.state.lowerCasePassword} /><br/>
            <Checkbox label='Memiliki satu karakter spesial.' checked={this.state.specialCharPassword}/><br/>
            <Checkbox label='Memiliki satu karakter angka.' checked={this.state.numberPassword}/><br/>
            <Checkbox label='Memiliki panjang lebih dari 5 karakter.' checked={this.state.lengthPassword}/><br/>
          </Form.Field>
        </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={this.close}>
            Cancel
          </Button>
          <Button positive icon='checkmark' labelPosition='right' content="Update Data" onClick={() => this.handleSubmit()} disabled={this.state.button} />
        </Modal.Actions>
      </Modal>
      </div>
      )
    )
  }
  componentWillMount () {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteData: (userID) => dispatch(deleteData(userID)),
    setUpdate: (userID) => dispatch(setUpdate(userID))
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    usersData: state.userData,
    updatedData: state.updatedData
  }
}

const CrudTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableExamplePagination)

export default CrudTable
