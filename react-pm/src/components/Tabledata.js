import React, { Component } from 'react'
import { Table, Button, Modal, Form, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { deleteData, setUpdate, updateData } from '../actions'

class TableExamplePagination extends Component {
  constructor(){
  	super();
  	this.state = {
      open: false,
      url: '',
      username: '',
      password: '',
      upperCasePassword: false,
      lowerCasePassword: false,
      specialCharPassword: false,
      numberPassword: false,
      lengthPassword: false,
      button: true,
      key: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  show = (dimmer, key) => () => {
    this.setState({ dimmer, open: true, key: key })
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
  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name

    if (name === 'password') {

      //Regex validator
      const uppercase = /[A-Z]/g
      const lowercase = /[a-z]/g
      const specialcase = /[.!@#$%^&*()_+-=]/g
      const numcase = /[0-9]/g

      //tempData
      let upPass = false
      let lowPass = false
      let spcPass = false
      let numPass = false
      let lengthPass = false
      let button = true

      if (value.match(uppercase)) {
        upPass = true
      } else {
        upPass = false
      }

      if (value.match(lowercase)) {
        lowPass = true
      } else {
        lowPass = false
      }

      if (value.match(specialcase)) {
        spcPass = true
      } else {
        spcPass = false
      }

      if (value.match(numcase)) {
         numPass= true
      } else {
        numPass = false
      }

      if (value.length > 5) {
         lengthPass= true
      } else {
        lengthPass= false
      }

      if ( upPass && lowPass && spcPass && numPass && lengthPass) {
        button = false
      } else {
        button = true
      }

      this.setState({
        upperCasePassword: upPass,
        lowerCasePassword: lowPass,
        specialCharPassword: spcPass,
        numberPassword: numPass,
        lengthPassword: lengthPass,
        button: button
      })
    }

    this.setState({
      [name]: value
    })
  }
  handleSubmit () {
    const userData = {
      url: this.state.url,
      username: this.state.username,
      password: this.state.password
    }
    this.props.updateData({userData, key: this.state.key})
    this.setState({
      url: '',
      username: '',
      password: '',
      open: false,
      upperCasePassword: false,
      lowerCasePassword: false,
      specialCharPassword: false,
      numberPassword: false,
      lengthPassword: false,
      button: true
    })
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
            <input type='text' placeholder='Your URL' name='url' value={this.state.url} onChange={(e) => this.handleInputChange(e)} />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <input type='text' placeholder='Username' name='username' value={this.state.username} onChange={(e) => this.handleInputChange(e)} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type='password' placeholder='Password' name='password' value={this.state.password} onChange={(e) => this.handleInputChange(e)} />
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
  componentWillReceiveProps(nextProps) {
    this.setState({
      url: nextProps.updatedData.url,
      username: nextProps.updatedData.username,
      password: nextProps.updatedData.password
    })
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteData: (userID) => dispatch(deleteData(userID)),
    setUpdate: (userID) => dispatch(setUpdate(userID)),
    updateData: (userData) => dispatch(updateData(userData))
  }
}

function mapStateToProps(state) {
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
