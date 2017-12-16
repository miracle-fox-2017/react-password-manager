import React, { Component } from 'react'
import { Input, Menu, Button, Header, Image, Modal, Form } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
  state = {
    activeItem: 'home',
    open: false
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
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item name='add new data' onClick={this.show('blurring')} />
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
      <Modal dimmer={dimmer} open={open} onClose={this.close}>
        <Modal.Header>Save Your Credential Data</Modal.Header>
        <Modal.Content>
        <Form>
          <Form.Field>
            <label>URL</label>
            <input placeholder='Your URL' />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type='password' placeholder='Username' />
          </Form.Field>
        </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={this.close}>
            Cancel
          </Button>
          <Button positive icon='checkmark' labelPosition='right' content="Add New Data" onClick={this.close} />
        </Modal.Actions>
      </Modal>
    </div>
    )
  }
}
