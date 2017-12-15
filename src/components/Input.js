import React, { Component } from 'react';
import { connect } from 'react-redux'
import { saveUser } from '../actions'
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import firebase from 'firebase'

class Input extends Component {
  constructor(){
    super()
    this.state = {
      form: {
        url: '',
        username: '',
        password: ''
      }
    }
  }
  componentWillMount () {
    let getFirebase = firebase.database().ref('users')
    getFirebase.on('value', function(snapshot) {
      console.log(snapshot.val(), 'ININ DARI FIRABS')
    })
  }
  onChanges = (e) => {
    let state = this.state.form
    state[e.target.name]= e.target.value
    this.setState(state)
  }
  onChangesValidation = (e) => {
    console.log(e.target.value, 'DTATA')
    let state = this.state.form
    state[e.target.name]= e.target.value
    this.setState(state)
  }
  render() {
    return (
      <div>
        <h1>Input</h1>
        <Form>
          <FormField 
            label='URL' 
            error='sample error'
            >
            <TextInput 
              name='url' 
              value={ this.state.form.url } 
              onDOMChange={ this.onChanges } 
              />
          </FormField>
          <br/>
          <FormField 
            label='Username' 
            error='sample error'
            >
            <TextInput 
              name='username' 
              value={ this.state.form.username } 
              onDOMChange={ this.onChanges } 
              />
          </FormField>
          <br/>
          <FormField 
            label='Password' 
            error='sample error'
            >
            <TextInput 
              name='password' 
              type='password' 
              value={ this.state.form.password } 
              onDOMChange={ this.onChangesValidation } 
              />
          </FormField>
          <Footer 
            pad={{"vertical": "medium"}}
            >
            <Button label='Submit'
              type='submit'
              primary={true}
              onClick={ () => this.props.saveUser(this.state.form)}
             />
          </Footer>
        </Form>
      </div>
    );
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