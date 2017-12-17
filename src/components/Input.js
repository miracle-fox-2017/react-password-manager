import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveUser } from '../actions'
import FormField from 'grommet/components/FormField'
import Form from 'grommet/components/Form'
import TextInput from 'grommet/components/TextInput'
import Button from 'grommet/components/Button'
import Footer from 'grommet/components/Footer'
import Label from 'grommet/components/Label'
import Status from 'grommet/components/icons/Status'
import PlatformCloudlinuxIcon from 'grommet/components/icons/base/PlatformCloudlinux'

class Input extends Component {
  constructor(){
    super()
    this.state = {
      form: {
        url: '',
        username: '',
        password: ''
      },
      disabledButton: false,
      statusError: null,
      statusURL: null,
      statusUsername: null,
      saveURL: false,
      saveUsername: false,
      savePassword: false,
      upper_case:true,
      lower_case:true,
      symbol: true,
      number: true,
      character: true
    }
  }
  onChanges = (e) => {
    let state = this.state.form
    let name = e.target.name
    let value = e.target.value
    if(name === 'url'){
      let trueUrl = /^[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
      if(value.trim() === ''){
        this.setState({
          statusURL: 'URL tidak boleh kosong',
          saveURL: false
        })
      } else if (!trueUrl.test(value)) {
        this.setState({
          statusURL: 'URL belum benar',
          saveURL: false
        })
      } else {
        this.setState({
          statusURL: null,
          saveURL: true
        })
      }
    } else if(name === 'username') {
      if(value.trim() === ''){
        this.setState({
          statusUsername: 'Username tidak boleh kosong',
          saveUsername: false
        })
      } else if(!/.{5,}/.test(value)){
        this.setState({
          statusUsername: 'Username tidak kurang dari 5 karakter',
          saveUsername: false
        })
      } else {
        this.setState({
          statusUsername: null,
          saveUsername: true
        })
      }
    }
    this.setState(state[name]= value)
  }
  onChangesValidation = (e) => {
    let strengthPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{5,}$/
    let password = e.target.value
    let state = this.state.form
    if(password.trim() === ''){
      this.setState({
        statusError: 'Password tidak boleh kosong',
        savePassword: false
      })
    } 
    if(!/(?=.*?[a-z])/.test(password)) {
      this.setState({
        statusError: 'Password harus memiliki setidaknya 1 huruf kecil',
        lower_case:false,
        savePassword: false
      })
    } else {
      this.setState({
        lower_case:true,
      })
    }
     if(!/(?=.*?[A-Z])/.test(password)) {
      this.setState({
        statusError: 'Password harus memiliki setidaknya 1 huruf besar',
        upper_case:false,
        savePassword: false
      })
    } else {
      this.setState({
        upper_case:true,
      })
    }
     if(!/(?=.*?[0-9])/.test(password)) {
      this.setState({
        statusError: 'Password harus memiliki setidaknya 1 angka',
        number: false,
        savePassword: false
      })
    } else {
      this.setState({
        number:true,
      })
    }
     if(!/(?=.*?[^\w\s])/.test(password)) {
      this.setState({
        statusError: 'Password harus memiliki setidaknya 1 symbol',
        symbol: false,
        savePassword: false
      })
    } else {
      this.setState({
        symbol:true,
      })
    }
     if(!/.{5,}/.test(password)) {
      this.setState({
        statusError: 'Password harus memiliki setidaknya 5 karakter',
        character: false,
        savePassword: false
      })
    } else {
      this.setState({
        character:true,
      })
    }
     if(strengthPassword.test(password)) {
      this.setState({
        statusError: null,
        savePassword: true
      })
    }
    this.setState(state[e.target.name]= password)
  }
  render() {
    return (
      <div>
        <h1>Input</h1>
        <Form>
          <FormField 
            label='URL*' 
            error={this.state.statusURL}
            >
            <TextInput 
              name='url' 
              value={ this.state.form.url } 
              onDOMChange={ this.onChanges } 
              />
          </FormField>
          <br/>
          <FormField 
            label='Username*' 
            error={this.state.statusUsername}
            >
            <TextInput 
              name='username' 
              value={ this.state.form.username } 
              onDOMChange={ this.onChanges } 
              />
          </FormField>
          <br/>
          <FormField 
            label='Password*' 
            error={this.state.statusError}
            >
            <TextInput 
              name='password' 
              type='password' 
              value={ this.state.form.password } 
              onDOMChange={ this.onChangesValidation } 
              />
          </FormField>
          <Label>
            <p>
              <Status value={this.state.upper_case ? 'ok':'critical'}/> Password harus memiliki setidaknya satu karakter huruf besar (upper-case)<br/>
              <Status value={this.state.lower_case ? 'ok':'critical'}/> Password harus memiliki setidaknya satu karakter huruf kecil (lower-case) <br/>
              <Status value={this.state.symbol ? 'ok':'critical'}/> Password harus memiliki setidaknya satu karakter spesial (@#$%...) <br/>
              <Status value={this.state.number ? 'ok':'critical'}/> Password harus memiliki setidaknya satu angka (number) <br/>
              <Status value={this.state.character ? 'ok':'critical'}/> Password harus memiliki setidaknya panjang (length) 5 karakter <br/>
            </p>
          </Label>
          <Footer 
            pad={{"vertical": "medium"}}
            >
            <Button 
            icon={<PlatformCloudlinuxIcon />}
            label='Save'
            primary={ true }
            onClick={ this.state.savePassword && this.state.saveURL && this.state.saveUsername ? () => this.props.saveUser(this.state.form) : null }
            />
          </Footer>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveUser: (user) => dispatch(saveUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)