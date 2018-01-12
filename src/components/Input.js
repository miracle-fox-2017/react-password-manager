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

export class Input extends Component {
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
    let name = e.target.name
    let value = e.target.value
    let STATUSURL = null
    let SAVEURL = false
    let STATUSUSERNAME = null
    let SAVEUSERNAME = false
    if(name === 'url'){
      let trueUrl = /^[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
      if(value.trim() === ''){
        STATUSURL = 'URL tidak boleh kosong'
        SAVEURL = false
      } else if (!trueUrl.test(value)) {
        STATUSURL = 'URL belum benar'
        SAVEURL = false
      } else {
        STATUSURL = null
        SAVEURL = true
      }
    } 
    if(name === 'username') {
      if(value.trim() === ''){
        STATUSUSERNAME = 'Username tidak boleh kosong'
        SAVEUSERNAME = false
      } else if(!/.{5,}/.test(value)){
        STATUSUSERNAME = 'Username tidak kurang dari 5 karakter'
        SAVEUSERNAME = false
      } else {
        STATUSUSERNAME = null
        SAVEUSERNAME = true
      }
    }
    this.setState({
      saveURL: SAVEURL,
      saveUsername: SAVEUSERNAME,
      statusURL: STATUSURL,
      statusUsername: STATUSUSERNAME,
      form: {
        [name]: value
      }
    })
  }
  onChangesValidation = (e) => {
    let strengthPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{5,}$/
    let password = e.target.value
    let ERRORSTATUS = null
    let SAVEPASSWORD = null
    let LOWERCASE = true
    let UPPERCASE = true
    let SYMBOL = true
    let NUMBER = true
    let CHARACTER = true
    if(password.trim() === ''){
      ERRORSTATUS = 'Password tidak boleh kosong'
      SAVEPASSWORD = false
    } 
    if(!/(?=.*?[a-z])/.test(password)) {
      ERRORSTATUS = 'Password harus memiliki setidaknya 1 huruf kecil'
      LOWERCASE = false
      SAVEPASSWORD = false
    } else {
      LOWERCASE =true
    }
     if(!/(?=.*?[A-Z])/.test(password)) {
      ERRORSTATUS = 'Password harus memiliki setidaknya 1 huruf besar'
      UPPERCASE = false
      SAVEPASSWORD = false
    } else {
      UPPERCASE = true
    }
     if(!/(?=.*?[0-9])/.test(password)) {
      ERRORSTATUS = 'Password harus memiliki setidaknya 1 angka'
      NUMBER = false
      SAVEPASSWORD = false
    } else {
      NUMBER = true
    }
     if(!/(?=.*?[^\w\s])/.test(password)) {
      ERRORSTATUS = 'Password harus memiliki setidaknya 1 symbol'
      SYMBOL = false
      SAVEPASSWORD = false
    } else {
      SYMBOL = true
    }
     if(!/.{5,}/.test(password)) {
      ERRORSTATUS = 'Password harus memiliki setidaknya 5 karakter'
      CHARACTER = false
      SAVEPASSWORD = false
    } else {
      CHARACTER = true
    }
     if(strengthPassword.test(password)) {
      ERRORSTATUS = null
      SAVEPASSWORD = true
    }
    this.setState({
      statusError: ERRORSTATUS,
      savePassword: SAVEPASSWORD,
      lower_case: LOWERCASE,
      upper_case: UPPERCASE,
      symbol: SYMBOL,
      number: NUMBER,
      character: CHARACTER,
      form: {
        [e.target.name]: password
      }
    })
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
              id="url"
              type='text'
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
              type='text'
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