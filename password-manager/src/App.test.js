import renderer from 'react-test-renderer'
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import Home from './components/Home'
import Header from './components/Header'
import PasswordWidget from './components/PasswordWidget'
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders and match to snapshot', () => {
  const tree = renderer.create(<App />)
  expect(tree).toMatchSnapshot();
})


describe('Header component testing', () => {
  const wrapper = mount(<Header />)
  it('Should have div with class header', () => {
    expect(wrapper.find('div').hasClass('header text-center')).toBe(true)
  })
  it('Should have tag header with class app-header', ()=> {
    expect(wrapper.find('header').hasClass('App-header')).toBe(true)
  })
  it('Should have tag element h1 with title `Password Manager` ', ()=> {
    expect(wrapper.find('h1').text()).toBe('Password Manager')
  })
})

describe('Home component testing', () => {
  const wrapper = shallow(<Home/>, { context: { store } } ).dive()
  it('Should have form input with classs inputForm', () => {
    expect(wrapper.find('form').hasClass('inputForm')).toBe(true)
  })
  it('Should render 3', () => {
    expect(wrapper.find('input').length).toEqual(3)
  })
  it('Should have 3 forms input required', ()=> {
    expect(wrapper.find('input').at(0).prop('name')).toEqual('url')
    expect(wrapper.find('input').at(1).prop('name')).toEqual('username')
    expect(wrapper.find('input').at(2).prop('name')).toEqual('password')
  })
  it('Should return value', () => {
    expect(wrapper.find('input').at(0).value = "facebook.com").toEqual('facebook.com')
    expect(wrapper.find('input').at(1).value = "amelia").toEqual('amelia')
    expect(wrapper.find('input').at(2).value = "4meL!a").toEqual('4meL!a')
  })
})

describe('Password widget', ()=> {
  const wrapperHomeInput = shallow(<Home/>, { context: { store } } ).dive().find('input').at(2)
  const initialState = {
    upperCase: true,
    lowerCase: true,
    oneNumber: true,
    specialCharacter: true,
    fiveChar: true
  }
  // console.log(wrapperHomeInput)
  const wrapper = shallow(<PasswordWidget upperCase={initialState.upperCase} lowerCase={initialState.lowerCase} oneNumber={initialState.oneNumber} specialCharacter
  ={initialState.specialCharacter} fiveChar={initialState.fiveChar}/>)

  wrapper.setProps({password:'4meliaR@' })
  wrapper.simulate('change', {props: {password: '4meliaR@'}})
  const wrapperInput = wrapper.find('input')
  
  it('Should have at least 1 uppercase character', ()=> {
    expect(wrapperInput.at(0).props().checked).toEqual(true)
  })
  it('Should have at least 1 lowercase character', ()=> {
    expect(wrapperInput.at(1).props().checked).toEqual(true)
  })
  it('Should have at least 1 special character', ()=> {
    expect(wrapperInput.at(2).props().checked).toEqual(true)
  })
  it('Should have more than 1 number', ()=> {
    expect(wrapperInput.at(3).props().checked).toEqual(true)
  })
  it('Should have more than 5 character', ()=> {
    expect(wrapperInput.at(4).props().checked).toEqual(true)
  })
})

