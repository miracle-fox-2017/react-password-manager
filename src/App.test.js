import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { mount, shallow } from 'enzyme'
import sinon from 'sinon'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { Redirect } from 'react-router'
import store from './store'
import Firebase from './firebase'
const db = Firebase.database()

import App from './App';
import AddPassword from './components/AddPassword'
import Home from './components/Home'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('input a new password for url: hacktiv8.com, username: capung, password: hackersejA7!', () => {
  const wrapper = mount(
    <Provider store={store}>
      <AddPassword />
    </Provider>
  )
  wrapper.find('input').at(0).simulate('change', {target: {value: 'hacktiv8.com'}});
  wrapper.find('input').at(1).simulate('change', {target: {value: 'capung'}});
  wrapper.find('input').at(2).simulate('change', {target: {value: 'hackersejA7!'}});
  const url = wrapper.find('input').at(0).html();
  const username = wrapper.find('input').at(1).html();
  const password = wrapper.find('input').at(2).html();
  expect(url).toEqual('<input type="text" value="hacktiv8.com" class="input" placeholder="hacktiv8.com">')
  expect(username).toEqual('<input type="text" value="capung" class="input" placeholder="username">')
  expect(password).toEqual('<input type="password" value="hackersejA7!" class="input" placeholder="********">')
  expect(wrapper.find('div').at(7).hasClass('notification is-success')).toEqual(true)
})

it('input a password: hackersejati, will false', () => {
  const wrapper = mount(
    <Provider store={store}>
      <AddPassword />
    </Provider>
  )
  wrapper.find('input').at(2).simulate('change', {target: {value: 'hackersejati'}});
  const uppercase = wrapper.find('div').at(7).children().at(1).children().hasClass('fa-check')
  const lowercase = wrapper.find('div').at(7).children().at(2).children().hasClass('fa-check')
  const special = wrapper.find('div').at(7).children().at(3).children().hasClass('fa-check')
  const number = wrapper.find('div').at(7).children().at(4).children().hasClass('fa-check')
  const length = wrapper.find('div').at(7).children().at(5).children().hasClass('fa-check')
  expect(uppercase).toEqual(false)
  expect(lowercase).toEqual(true)
  expect(special).toEqual(false)
  expect(number).toEqual(false)
  expect(length).toEqual(true)
})

it('input a password: hackerseja7i, will false', () => {
  const wrapper = mount(
    <Provider store={store}>
      <AddPassword />
    </Provider>
  )
  wrapper.find('input').at(2).simulate('change', {target: {value: 'hackerseja7i'}});
  const uppercase = wrapper.find('div').at(7).children().at(1).children().hasClass('fa-check')
  const lowercase = wrapper.find('div').at(7).children().at(2).children().hasClass('fa-check')
  const special = wrapper.find('div').at(7).children().at(3).children().hasClass('fa-check')
  const number = wrapper.find('div').at(7).children().at(4).children().hasClass('fa-check')
  const length = wrapper.find('div').at(7).children().at(5).children().hasClass('fa-check')
  expect(uppercase).toEqual(false)
  expect(lowercase).toEqual(true)
  expect(special).toEqual(false)
  expect(number).toEqual(true)
  expect(length).toEqual(true)
})

it('input a password: hackerseja7!, will false', () => {
  const wrapper = mount(
    <Provider store={store}>
      <AddPassword />
    </Provider>
  )
  wrapper.find('input').at(2).simulate('change', {target: {value: 'hackerseja7!'}});
  const uppercase = wrapper.find('div').at(7).children().at(1).children().hasClass('fa-check')
  const lowercase = wrapper.find('div').at(7).children().at(2).children().hasClass('fa-check')
  const special = wrapper.find('div').at(7).children().at(3).children().hasClass('fa-check')
  const number = wrapper.find('div').at(7).children().at(4).children().hasClass('fa-check')
  const length = wrapper.find('div').at(7).children().at(5).children().hasClass('fa-check')
  expect(uppercase).toEqual(false)
  expect(lowercase).toEqual(true)
  expect(special).toEqual(true)
  expect(number).toEqual(true)
  expect(length).toEqual(true)
})

it('input a password: hackersejA7!, will false', () => {
  const wrapper = mount(
    <Provider store={store}>
      <AddPassword />
    </Provider>
  )
  wrapper.find('input').at(0).simulate('change', {target: {value: 'hacktiv8.com'}});
  wrapper.find('input').at(1).simulate('change', {target: {value: 'capung'}});
  wrapper.find('input').at(2).simulate('change', {target: {value: 'hackersejA7!'}});
  const uppercase = wrapper.find('div').at(7).children().at(1).children().hasClass('fa-check')
  const lowercase = wrapper.find('div').at(7).children().at(2).children().hasClass('fa-check')
  const special = wrapper.find('div').at(7).children().at(3).children().hasClass('fa-check')
  const number = wrapper.find('div').at(7).children().at(4).children().hasClass('fa-check')
  const length = wrapper.find('div').at(7).children().at(5).children().hasClass('fa-check')
  wrapper.find('button').at(0).simulate('click')
  const dummyUser = {
    id: '1',
    url: 'hacktiv8.com',
    username: "capung",
    password: "hackersejA7!",
    createdAt: Date(),
    updatedAt: ''
  }
  wrapper.update()
  // const submitHandler = sinon.spy();
  // console.log(submitHandler)
  // spyOn(AddPassword.prototype, 'submitHandler')
  expect(uppercase).toEqual(true)
  expect(lowercase).toEqual(true)
  expect(special).toEqual(true)
  expect(number).toEqual(true)
  expect(length).toEqual(true)
})
