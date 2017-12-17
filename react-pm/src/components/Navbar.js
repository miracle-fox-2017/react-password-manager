import React, { Component } from 'react'
import { Input, Menu, Button, Header, Image, Modal, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addData, watchUsersData } from '../actions'

class MenuExampleSecondary extends Component {
  constructor() {
    super()
    this.state = {
      activeItem: 'home',
      open: false,
      url: '',
      username: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name
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
  }
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem, open, dimmer } = this.state
    return (
    <div>
      <Menu secondary>
        <Menu.Item name='home' onClick={this.handleItemClick} />
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
            <input type='password' placeholder='Username' name='password' value={this.state.password} onChange={(e) => this.handleInputChange(e)} />
          </Form.Field>
        </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={this.close}>
            Cancel
          </Button>
          <Button positive icon='checkmark' labelPosition='right' content="Add New Data" onClick={() => this.handleSubmit()} />
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
