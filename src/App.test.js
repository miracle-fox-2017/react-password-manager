import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import store from './store'
import App from './App';


import Home from './Components/Home'

Enzyme.configure({ adapter: new Adapter() })

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });


describe('Password Management', () => {
	test('First State Password', () => {
		const wrapper = shallow(<Home />, { context: { store } } ).dive()		
		expect(wrapper.state().checkLC).toEqual('alert alert-dismissible alert-danger')
		expect(wrapper.state().checkUC).toEqual('alert alert-dismissible alert-danger')
		expect(wrapper.state().checkNum).toEqual('alert alert-dismissible alert-danger')
		expect(wrapper.state().checkLength).toEqual('alert alert-dismissible alert-danger')
		expect(wrapper.state().checkSpecial).toEqual('alert alert-dismissible alert-danger')		
	})


	test('Password Valid', () => {
		const wrapper = shallow(<Home />, { context: { store } } ).dive()		
		wrapper.find('#changePassword').simulate('change', {target: { name:'password', value: 'a2!@3saA'}})
		expect(wrapper.state().checkLC).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkUC).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkNum).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkLength).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkSpecial).toEqual('alert alert-dismissible alert-success')		
		// console.log(wrapper.instance()) untuk melihat isi state
	})

	test('Password LowerCase Invalid', () => {
		const wrapper = shallow(<Home />, { context: { store } } ).dive()		
		wrapper.find('#changePassword').simulate('change', {target: { name:'password', value: 'A2!@3A'}})
		expect(wrapper.state().checkLC).toEqual('alert alert-dismissible alert-danger')
		expect(wrapper.state().checkUC).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkNum).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkLength).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkSpecial).toEqual('alert alert-dismissible alert-success')		
	})	

	test('Password UpperCase Invalid', () => {
		const wrapper = shallow(<Home />, { context: { store } } ).dive()		
		wrapper.find('#changePassword').simulate('change', {target: { name:'password', value: 'a2!@3a'}})
		expect(wrapper.state().checkLC).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkUC).toEqual('alert alert-dismissible alert-danger')
		expect(wrapper.state().checkNum).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkLength).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkSpecial).toEqual('alert alert-dismissible alert-success')		
	})

	test('Password Number Invalid', () => {
		const wrapper = shallow(<Home />, { context: { store } } ).dive()		
		wrapper.find('#changePassword').simulate('change', {target: { name:'password', value: 'aw!@cA'}})
		expect(wrapper.state().checkLC).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkUC).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkNum).toEqual('alert alert-dismissible alert-danger')
		expect(wrapper.state().checkLength).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkSpecial).toEqual('alert alert-dismissible alert-success')		
	})	

	test('Password Length Invalid', () => {
		const wrapper = shallow(<Home />, { context: { store } } ).dive()		
		wrapper.find('#changePassword').simulate('change', {target: { name:'password', value: 'aA1@'}})
		expect(wrapper.state().checkLC).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkUC).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkNum).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkLength).toEqual('alert alert-dismissible alert-danger')
		expect(wrapper.state().checkSpecial).toEqual('alert alert-dismissible alert-success')		
	})	

	test('Password SpecialCharacter Invalid', () => {
		const wrapper = shallow(<Home />, { context: { store } } ).dive()		
		wrapper.find('#changePassword').simulate('change', {target: { name:'password', value: 'A2asd3A'}})
		expect(wrapper.state().checkLC).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkUC).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkNum).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkLength).toEqual('alert alert-dismissible alert-success')
		expect(wrapper.state().checkSpecial).toEqual('alert alert-dismissible alert-danger')		
	})	

	test('Submit', () => {
		const wrapper = shallow(<Home />, { context: { store } } ).dive()
		wrapper.find('#changeUrl').simulate('change', {target: { name:'url', value: 'www.jest.com'}})
		wrapper.find('#changeOwner').simulate('change', {target: { name:'owner', value: 'jest'}})
		wrapper.find('#changeUsername').simulate('change', {target: { name:'username', value: 'jestua'}})
		wrapper.find('#changePassword').simulate('change', {target: { name:'password', value: 'a@13sA'}})
		wrapper.find('#savePM').simulate('click', {
			url: wrapper.state().url,
			owner: wrapper.state().owner,
			username: wrapper.state().username,
			password: wrapper.state().password
		} )	
		console.log(wrapper.state())
	})					
})