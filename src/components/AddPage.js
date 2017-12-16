import React, { Component } from 'react'
import { Container, Header, Form, Button, Grid, Segment } from 'semantic-ui-react'

class AddPage extends Component {
  constructor() {
    super()
    this.state = {
      url: '',
      username: '',
      password: '',
    }
  }

  inputHandle() {
    this.setState({
      [this.target.name]: this.target.value
    })
  }

  submitData() {

  }

  render() {
    return (
      <Container>
        <Header as='h2' dividing>
          Add New User Password
        </Header>
        <Grid stackable>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <Segment color='orange'>
              <Header as='h3' textAlign='center'>
                Password Form
              </Header>
              <Form>
                <Form.Field required>
                  <label>URL</label>
                  <input placeholder='URL Web/Application' />
                </Form.Field>
                <Form.Field required>
                  <label>Username</label>
                  <input placeholder='Username' />
                </Form.Field>
                <Form.Field required>
                  <label>Password</label>
                  <input placeholder='Password' type='password' />
                </Form.Field>
                <Button type='submit' color='orange'>Submit</Button>
              </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default AddPage