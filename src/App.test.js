import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import Link from './components/Link'
import PasswordWidget from './components/PasswordWidget'
import store from './store'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Testing Password Widget Component', () => {
  test('Check password inpunt must Exists.', () => {    
    const wrapper = shallow(<PasswordWidget/>, { context: { store } } ).dive()
    expect(wrapper.find('input#sitePassword').exists()).toEqual(true);
  })

  test('Check state isUppercaseValid default value', () => {   
    const wrapper = shallow(<PasswordWidget/>, { context: { store } } ).dive()
    expect(wrapper.state().isUppercaseValid).toEqual(false);
  })

  test('Check state isLowecaseValid default value', () => {   
    const wrapper = shallow(<PasswordWidget/>, { context: { store } } ).dive()
    expect(wrapper.state().isLowecaseValid).toEqual(false);
  })

  test('Check state isNumberValid default value', () => {   
    const wrapper = shallow(<PasswordWidget/>, { context: { store } } ).dive()
    expect(wrapper.state().isNumberValid).toEqual(false);
  })

  test('Check state isSpecialValid default value', () => {   
    const wrapper = shallow(<PasswordWidget/>, { context: { store } } ).dive()
    expect(wrapper.state().isSpecialValid).toEqual(false);
  })

  test('Check state isLengthValid default value', () => {   
    const wrapper = shallow(<PasswordWidget/>, { context: { store } } ).dive()
    expect(wrapper.state().isLengthValid).toEqual(false);
  })

  test('Check Input password correct Password', () => {   
    const wrapper = shallow(<PasswordWidget/>, { context: { store } } ).dive()
    wrapper.find('input#sitePassword').simulate('change', {target: {
      name: 'sitePassword', value: 'Ad2345!'
    }})

    expect(wrapper.state().isLowecaseValid).toEqual(true);
    expect(wrapper.state().isUppercaseValid).toEqual(true);
    expect(wrapper.state().isSpecialValid).toEqual(true);
    expect(wrapper.state().isNumberValid).toEqual(true);
    expect(wrapper.state().isLengthValid).toEqual(true);
  })

   test('Check Input password lowercase state true', () => {   
    const wrapper = shallow(<PasswordWidget/>, { context: { store } } ).dive()
    wrapper.find('input#sitePassword').simulate('change', 
      {
        target: {
          name: 'sitePassword', value: 'aaz'
        }
      }
    )

    expect(wrapper.state().isLowecaseValid).toEqual(true);
    expect(wrapper.state().isUppercaseValid).toEqual(false);
    expect(wrapper.state().isSpecialValid).toEqual(false);
    expect(wrapper.state().isNumberValid).toEqual(false);
    expect(wrapper.state().isLengthValid).toEqual(false);
  })

  test('Check Input password uppercase state true', () => {   
    const wrapper = shallow(<PasswordWidget/>, { context: { store } } ).dive()
    wrapper.find('input#sitePassword').simulate('change', 
      {
        target: {
          name: 'sitePassword', value: 'AAZ'
        }
      }
    )

    expect(wrapper.state().isLowecaseValid).toEqual(false);
    expect(wrapper.state().isUppercaseValid).toEqual(true);
    expect(wrapper.state().isSpecialValid).toEqual(false);
    expect(wrapper.state().isNumberValid).toEqual(false);
    expect(wrapper.state().isLengthValid).toEqual(false);
  })

  test('Check Input password Special character state true', () => {   
    const wrapper = shallow(<PasswordWidget/>, { context: { store } } ).dive()
    wrapper.find('input#sitePassword').simulate('change', 
      {
        target: {
          name: 'sitePassword', value: '!@#'
        }
      }
    )

    expect(wrapper.state().isLowecaseValid).toEqual(false);
    expect(wrapper.state().isUppercaseValid).toEqual(false);
    expect(wrapper.state().isSpecialValid).toEqual(true);
    expect(wrapper.state().isNumberValid).toEqual(false);
    expect(wrapper.state().isLengthValid).toEqual(false);
  })

  test('Check Input password Number state true', () => {   
    const wrapper = shallow(<PasswordWidget/>, { context: { store } } ).dive()
    wrapper.find('input#sitePassword').simulate('change', 
      {
        target: {
          name: 'sitePassword', value: '12'
        }
      }
    )

    expect(wrapper.state().isLowecaseValid).toEqual(false);
    expect(wrapper.state().isUppercaseValid).toEqual(false);
    expect(wrapper.state().isSpecialValid).toEqual(false);
    expect(wrapper.state().isNumberValid).toEqual(true);
    expect(wrapper.state().isLengthValid).toEqual(false);
  })

  test('Check Input password lenght state true', () => {   
    const wrapper = shallow(<PasswordWidget/>, { context: { store } } ).dive()
    wrapper.find('input#sitePassword').simulate('change', 
      {
        target: {
          name: 'sitePassword', value: '12##aA'
        }
      }
    )

    expect(wrapper.state().isLengthValid).toEqual(true);
  })
})