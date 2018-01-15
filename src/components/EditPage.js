import React, { Component } from 'react'
import firebase from 'firebase'
import FormPage from './Form'
import { Container, Grid, Header, Loader } from 'semantic-ui-react'

class EditPage extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      id: ''
    }
  }
  
  componentWillMount() {
    let id = this.props.id.match.params.id
    firebase.database().ref('passwordlist/'+id).on('value', snap => {
      this.setState({
        user: snap.val(),
        id: id
      })
    })
  }

  render() {
    let content
    if(this.state.user) {
      content = <FormPage user={this.state.user} id={this.state.id} props={this.props}/>
    } else {
      content = <Loader active inline='centered' />
    }
    return (
      <Container>
        <Grid stackable>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <Header as='h2' dividing>
                Edit User Password
              </Header>
              { content }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default EditPage