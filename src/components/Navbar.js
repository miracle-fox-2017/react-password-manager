import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Menu, Input } from 'semantic-ui-react'
import { Container, Grid } from 'semantic-ui-react'
import { passwords } from '../actions/searchActions'
import firebase from 'firebase'

class Navbar extends Component {
  searchHandle(event) {
    let filter = new RegExp(event.target.value, 'g')
    firebase.database().ref('passwordlist').on('value', snap => {
      var returnArr = []
      snap.forEach(function(childSnapshot) {
        var item = childSnapshot.val()
        item.key = childSnapshot.key

        returnArr.push(item)
      })
      let users = returnArr
  
      let results = users.filter(user => {
        return user.url.match(filter)
      })
  
      this.props.searchPassword(results)
    })
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
              <Menu.Item as={Link} to='/' name='home' active={activeMenu === 'home'}/>
              <Menu.Item as={Link} to='/add' name='add new' active={activeMenu === 'addnew'}/>
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Input icon='search' placeholder='Search...' onChange={(e) => this.searchHandle(e)}/>
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

const maoStateToProps = null

const mapDispatchToProps = (dispatch) => {
  return {
    searchPassword: (results) => dispatch(passwords(results))
  }
}

export default connect(maoStateToProps, mapDispatchToProps)(Navbar)