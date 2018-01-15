import React, { Component } from 'react'
import { Menu, Button, Modal, Form, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addData, watchUsersData } from '../actions'

export class MenuExampleSecondary extends Component {
  constructor() {
    super()
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
      button: true
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log('masuk low')
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
    this.props.addNewData(userData)
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
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { open, dimmer } = this.state
    return (
    <div>
      <Menu secondary>
        <Menu.Item name='Password Manager'/>
        <Menu.Menu position='right'>
          <Menu.Item name='add new data' onClick={this.show('blurring')} />
        </Menu.Menu>
      </Menu>
      <Modal dimmer={dimmer} open={open} onClose={this.close}>
        <Modal.Header>Save Your Credential Data</Modal.Header>
        <Modal.Content>
        <Form>
          <Form.Field>
            <label>URL</label>
            <input type='text' placeholder='Your URL' name='url' value={this.state.url} onChange={(e) => this.handleInputChange(e)}/>
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
          <Button positive icon='checkmark' labelPosition='right' content="Add New Data" onClick={() => this.handleSubmit()} disabled={this.state.button} />
        </Modal.Actions>
      </Modal>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  watchUsersData(dispatch)
  return {
    addNewData: (newData) => {
      dispatch(addData(newData))
    }
  }
}

const CrudNavbar = connect(
  null,
  mapDispatchToProps
)(MenuExampleSecondary)

export default CrudNavbar
