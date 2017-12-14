import React, { Component } from 'react'
import { Input, Menu, Button, Header, Image, Modal } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
  state = {
    activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home' onClick={this.handleItemClick} />
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item name='add new data' onClick={this.handleItemClick} />
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}
