import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App';
import Form from './components/Form'
import firebase from 'firebase'
firebase.initializeApp({
  apiKey: 'AIzaSyC_uO5C7DCWmk8CbVzSAxNe177YMqJe5VE ',
  databaseURL: 'https://password-manager-d2507.firebaseio.com/',
})

configure({ adapter: new Adapter() });

describe('Form Page Testing', () => {
  const wrapper = shallow(<Form/>)
  test('Should Render Header', () => {
    const header = wrapper.find('Header')
    expect(header).toHaveLength(1)
  })
  test('Should Render Inputs', () => {
    let input = wrapper.find('input')
    expect(input).toHaveLength(3)
  })
  test('Should Render Button', () => {
    let button = wrapper.find('Button')
    expect(button).toHaveLength(1)
  })
  test('Error Submit when Form Field blank', () => {
    wrapper.find('Button').simulate('click');
    let messages = wrapper.state('messages')
    expect(messages[0]).toEqual('Please fill all required fields!!')
  })
});
