import React, { Component } from 'react'
import { Container, Header, Form, Button, Grid, Segment, Message, Progress } from 'semantic-ui-react'

class AddPage extends Component {
  constructor() {
    super()
    this.state = {
      url: '',
      username: '',
      password: '',
      passwordStrength: 0,
      msgVis: false,
      messages: [],
      colorMeter: 'grey'
    }
  }

  inputHandle({target}) {
    let messages = [],
        passwordStrength = 85,
        colorMeter = 'red'
    if(target.name === 'password') {
      
      let lowerCase = /[a-z]/g,
          upperCase = /[A-Z]/g,
          number = /[0-9]/g,
          special = /[-!@_#%^&.*+?^$=;:/'",{}()|[\]\\]/g,
          msgLower = 'You must include lower case letters in your password.',
          msgUpper = 'You must include upper case letters in your password.',
          msgNumber = 'You must include number in your password.',
          msgSpecial = 'You must include special character in your password.',
          msgLength = 'Password length minimal 5 character.';
          
      if(!target.value.match(lowerCase)) {
        if(messages.indexOf(msgLower) === -1) messages.push(msgLower)
        passwordStrength -= 17
      }

      if(!target.value.match(upperCase)) {
        if(messages.indexOf(msgUpper) === -1) messages.push(msgUpper)
        passwordStrength -= 17
      }

      if(!target.value.match(number)) {
        if(messages.indexOf(msgNumber) === -1) messages.push(msgNumber)
        passwordStrength -= 17
      }
      
      if(!target.value.match(special)) {
        if(messages.indexOf(msgSpecial) === -1) messages.push(msgSpecial)
        passwordStrength -= 17
      }
      
      if(target.value.length < 5) {
        if(messages.indexOf(msgLength) === -1) messages.push(msgLength)
        passwordStrength -= 17
      }
    
      if(!messages.length) {
        colorMeter = 'teal'
      } else if(messages.length === 1) {
        colorMeter = 'olive'
      } else if(messages.length === 2) {
        colorMeter = 'yellow'
      } else if(messages.length === 3) {
        colorMeter = 'orange'
      }

      if(target.value.length >= 8 && !messages.length) {
        passwordStrength += 15
        colorMeter = 'blue'
      }
    }

    if(!this.state.messages.length) this.setState({msgVis: false})

    this.setState({
      [target.name]: target.value,
      messages: messages,
      passwordStrength: passwordStrength,
      colorMeter: colorMeter
    })
  }
  
  submitData() {
    this.state.messages.length > 0 ? this.setState({msgVis: true}) : this.setState({msgVis: false})
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
                  <input name='url' placeholder='URL Web/Application' onChange={(e) => this.inputHandle(e)}/>
                </Form.Field>
                <Form.Field required>
                  <label>Username</label>
                  <input name='username' placeholder='Username' onChange={(e) => this.inputHandle(e)}/>
                </Form.Field>
                <Form.Field required>
                  <label>Password</label>
                  <input name='password' placeholder='Password' type='password' onChange={(e) => this.inputHandle(e)}/>
                  <Progress color={this.state.colorMeter} percent={this.state.passwordStrength} size='tiny'/>
                </Form.Field>
                <Message
                  error
                  visible={this.state.msgVis}
                  header='There was some errors with your input password'
                  list={this.state.messages}
                />
                <Button type='submit' color='orange' onClick={(e) => this.submitData(e)}>Submit</Button>
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