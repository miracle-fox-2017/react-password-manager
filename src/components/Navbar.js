import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'

class Navbar extends Component {
  constructor() {
    super()
    this.state = { 
      activeItem: 'home' 
    }
  }

  handleItemClick(value) {
    this.setState({
      activeItem: value
    })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={() => this.handleItemClick('home')} />
        <Menu.Item name='password list' active={activeItem === 'password'} onClick={() => this.handleItemClick('password')} />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar