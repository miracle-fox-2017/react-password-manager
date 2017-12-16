import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Menu, Input } from 'semantic-ui-react'
import { Container, Grid } from 'semantic-ui-react'
import { activeMenu } from '../actions/navbarActions';

class Navbar extends Component {
  constructor() {
    super()
    this.state = { 
      activeItem: 'home' 
    }
  }

  handleItemClick(menu) {
    this.props.activeMenuDispatch(menu)
  }

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
              <Menu.Item as={Link} to='/' name='home' active={activeMenu === 'home'} onClick={() => this.handleItemClick('home')} />
              <Menu.Item as={Link} to='/add' name='add new' active={activeMenu === 'addnew'} onClick={() => this.handleItemClick('addnew')} />
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

const mapStateToProps = (state) => {
  return {
    activeMenu: state.navbar.activeMenu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    activeMenuDispatch: (menu) => dispatch(activeMenu(menu))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)