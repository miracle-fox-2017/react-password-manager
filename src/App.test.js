import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input, { Input as InputWithoutRedux} from './components/Input'
import { Provider } from 'react-redux'
import store from './store'
import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() });
// SET WATCMAN 
// echo fs.inotify.max_user_instances=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
// echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
// echo fs.inotify.max_queued_events=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p


describe('Testing FROM password manager', () => {
  let FormInput = shallow(<InputWithoutRedux/>)
  // console.log(FormInput.debug())
  it('Rendering Began without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('Should empty form', () => {
    let formStatus = FormInput.state
    expect(FormInput.state('form').url).equal('')
    expect(FormInput.state('form').username).equal('')
    expect(FormInput.state('form').password).equal('')
    expect(FormInput.state('disabledButton')).equal(false)
  })

  describe('Testing form for URL', () => {
    let FormInputs = shallow(<InputWithoutRedux/>)
    it('Check URL BAD', () => {
      FormInputs.instance().onChanges({ target: { name: 'url', value: "abc" }})
      expect(FormInputs.state('statusURL')).equal('URL belum benar')
      expect(FormInputs.state('saveURL')).to.be.false
      FormInputs.instance().onChanges({ target: { name: 'url', value: "" }})
      expect(FormInputs.state('statusURL')).equal('URL tidak boleh kosong')
      expect(FormInputs.state('saveURL')).to.be.false
    })
    it('Check URL GOOD', () => {
      FormInputs.instance().onChanges({ target: { name: 'url', value: "abc.com" }})
      expect(FormInputs.state('statusURL')).equal(null)
      expect(FormInputs.state('saveURL')).to.be.true
    })
  })
  describe('Testing form for USERNAME', () => {
    let FormInputUsername = shallow(<InputWithoutRedux/>)
    
    it('Check USERNAME GOOD', () => {
      FormInputUsername.instance().onChanges({ target: { name: 'username', value: "abrakadabra" }})
      expect(FormInputUsername.state('statusURL')).equal(null)
      expect(FormInputUsername.state('saveUsername')).to.be.true
    })
    it('Check USERNAME BAD', () => {
      FormInputUsername.instance().onChanges({ target: { name: 'username', value: '' }})
      expect(FormInputUsername.state('statusUsername')).equal('Username tidak boleh kosong')
      FormInputUsername.instance().onChanges({ target: { name: 'username', value: "abcd" }})
      expect(FormInputUsername.state('statusUsername')).equal('Username tidak kurang dari 5 karakter')
      expect(FormInputUsername.state('saveUsername')).to.be.false
    })
  })
  describe('Testing form for PASSWORD', () => {
    let FormInputPassword = shallow(<InputWithoutRedux/>)
    it('Check PASSWORD GOOD', () => {
      FormInputPassword.instance().onChangesValidation({ target: { value: "Aa1!a" }})
      expect(FormInputPassword.state('statusError')).equal(null)
      expect(FormInputPassword.state('savePassword')).to.be.true
      expect(FormInputPassword.state('character')).to.be.true
      expect(FormInputPassword.state('upper_case')).to.be.true
      expect(FormInputPassword.state('lower_case')).to.be.true
      expect(FormInputPassword.state('symbol')).to.be.true
      expect(FormInputPassword.state('number')).to.be.true
    })
    it('Check PASSWORD BAD', () => {
      FormInputPassword.instance().onChangesValidation({ target: { value: 'Aa1!' }})
      expect(FormInputPassword.state('statusError')).equal('Password harus memiliki setidaknya 5 karakter')
      expect(FormInputPassword.state('character')).to.be.false
      FormInputPassword.instance().onChangesValidation({ target: { value: "AA1!A" }})
      expect(FormInputPassword.state('statusError')).equal('Password harus memiliki setidaknya 1 huruf kecil')
      expect(FormInputPassword.state('lower_case')).to.be.false
      FormInputPassword.instance().onChangesValidation({ target: { value: "aa1!a" }})
      expect(FormInputPassword.state('statusError')).equal('Password harus memiliki setidaknya 1 huruf besar')
      expect(FormInputPassword.state('upper_case')).to.be.false
      FormInputPassword.instance().onChangesValidation({ target: { value: "AAa!A" }})
      expect(FormInputPassword.state('statusError')).equal('Password harus memiliki setidaknya 1 angka')
      expect(FormInputPassword.state('number')).to.be.false
      FormInputPassword.instance().onChangesValidation({ target: { value: "AA11A" }})
      expect(FormInputPassword.state('statusError')).equal('Password harus memiliki setidaknya 1 symbol')
      expect(FormInputPassword.state('symbol')).to.be.false
      expect(FormInputPassword.state('savePassword')).to.be.false
    })
  })
  describe('Testing button for SAVE', () => {
    let ButtonSave = shallow(<InputWithoutRedux/>)
    
    it('Status BUTTON ON', () => {
      ButtonSave.instance().onChanges({ target: { name: 'username', value: "abrakadabra" }})
      ButtonSave.instance().onChanges({ target: { name: 'url', value: "abc.com" }})
      ButtonSave.instance().onChangesValidation({ target: { value: "Aa1!a" }})
      expect(ButtonSave.state('savePassword')).to.be.true
      // expect(ButtonSave.state('saveUsername')).to.be.true
      expect(ButtonSave.state('saveURL')).to.be.true
    })
    it('Status BUTTON OFF', () => {
      ButtonSave.instance().onChanges({ target: { name: 'username', value: "abra" }})
      ButtonSave.instance().onChanges({ target: { name: 'url', value: "abcm" }})
      ButtonSave.instance().onChangesValidation({ target: { value: "Aa!a" }})
      expect(ButtonSave.state('savePassword')).to.be.false
      expect(ButtonSave.state('saveUsername')).to.be.false
      expect(ButtonSave.state('saveURL')).to.be.false
    })
  })
  describe('Testing Description Password Validation', () => {
    let Description= shallow(<InputWithoutRedux/>)
    it('Status', () => {
      let status = Description.find('Status')
      expect(status).to.have.length(5)
    })
  })
})
