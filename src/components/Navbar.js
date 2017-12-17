import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Input } from 'semantic-ui-react'
import { Container, Grid } from 'semantic-ui-react'

class Navbar extends Component {
  render() {
    const { activeMenu } = this.props

    return (
      <div>
        <Grid.Row>
          <Menu stackable borderless className='navbar'>
            <Container>
              <Menu.Item>
                <img src='http://www.gcpvd.org/wp-content/uploads/2015/02/square-p-01.png' alt='logo'/>
              </Menu.Item>
              <Menu.Item as={Link} to='/' name='home' active={activeMenu === 'home'}/>
              <Menu.Item as={Link} to='/add' name='add new' active={activeMenu === 'addnew'}/>
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Input icon='search' placeholder='Search...' />
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <br/>
            {this.props.children}
          </Grid.Column>
        </Grid.Row>
      </div>
    )
  }
}

export default Navbar