import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header, Form, Button, Segment, Message, Progress } from 'semantic-ui-react'
import firebase from 'firebase'

class FormPage extends Component {
  constructor(props) {
    super(props)
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
        colorMeter,
        passwordStrength

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

      colorMeter = 'red';
      passwordStrength = 85;
          
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
      passwordStrength: passwordStrength || 0,
      colorMeter: colorMeter || 'grey'
    })
  }
  
  submitData() {
    let db = firebase.database()
    let date = Date.now()
    let newData = {
      url: this.state.url,
      username: this.state.username,
      password: this.state.password,
      createdAt: new Date(date).toISOString()
    }

    let updateData = {
      url: this.state.url,
      username: this.state.username,
      password: this.state.password,
      updatedAt: new Date(date).toISOString()
    }

    this.state.messages.length > 0 ? this.setState({msgVis: true}) : this.setState({msgVis: false})

    if(newData.url && newData.username && newData.password && !this.state.messages.length) {
      if(this.props.user) {
        db.ref('passwordlist/'+this.props.id).update(updateData)
        this.props.props.id.history.push('/')
      } else {
        db.ref('passwordlist/').push(newData);
        this.props.props.history.push('/')
      }
      this.setState({
        url: '',
        username: '',
        password: '',
        messages: []
      })
    } else {
      let msg = 'Please fill all required fields!!'
      let messages = this.state.messages
      if(messages.indexOf(msg) === -1) messages.push(msg)
      this.setState({
        messages: messages,
        msgVis: true
      })
    }
  }

  componentWillMount() {
    this.props.user ?
    this.setState({
      url: this.props.user.url,
      username: this.props.user.username,
      password: this.props.user.password,
    })
    :
    this.setState({
      url: '',
      username: '',
      password: '',
    })
  }

  render() {
    return (
      <Segment color='orange'>
        <Header as='h3' textAlign='center'>
          Password Form
        </Header>
        <Form>
          <Form.Field required>
            <label>URL</label>
            <input name='url' placeholder='URL Web/Application' value={this.state.url} onChange={(e) => this.inputHandle(e)}/>
          </Form.Field>
          <Form.Field required>
            <label>Username</label>
            <input name='username' placeholder='Username' value={this.state.username} onChange={(e) => this.inputHandle(e)}/>
          </Form.Field>
          <Form.Field required>
            <label>Password</label>
            <input name='password' placeholder='Password' type='password' value={this.state.password} onChange={(e) => this.inputHandle(e)}/>
            <Progress color={this.state.colorMeter} percent={this.state.passwordStrength} size='tiny'/>
          </Form.Field>
          <Message
            error
            visible={this.state.msgVis}
            header='There was some errors'
            list={this.state.messages}
          />
          <Button type='submit' color='orange' onClick={(e) => this.submitData(e)}>Submit</Button>
        </Form>
      </Segment>
    )
  }
}

export default FormPage