import React from 'react';
import ReactDOM from 'react-dom'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount, render } from 'enzyme';
import { expect } from 'chai'
import { Form } from '../components/Form'

Enzyme.configure({ adapter: new Adapter() });

describe('Testing <Form />', () => {
  it('test classname', () => {
    const wrapper = shallow(<Form />)
    expect(wrapper.containsAnyMatchingElements([
      <form />,
      <div />,
      <label />,
      <input />,
      <fieldset />,
      <button />
    ])).to.equal(true)
  })

  it('1 button click', () => {
    const wrapper = shallow(<Form />)
    expect(wrapper.find('button')).to.have.length(1)
  })

  it('pass value on the onChange function', () => {
    const component = shallow(<Form/>)
    console.log(component.find('.password'))
    component.find('input').stimulate('change', { target: {
      value: 'Change function'
    }
  })
    expect(toJson(component)).toMatchSnapshot()
  })


})
