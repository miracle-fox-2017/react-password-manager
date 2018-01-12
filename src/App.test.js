import React from 'react';
import {expect} from 'chai';
import Enzyme,{shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter : new Adapter()})

import store from './redux';
import {Add} from './components/Add';

describe('<Add/>',() => {
  it('Test',() => {
    const wrapper = mount(<Add/>);
    wrapper.find('input').at(0).simulate('change',{target:{value:'https://facevook.com'}});
    wrapper.find('input').at(1).simulate('change',{target:{value:'tomybudiman'}});
    wrapper.find('input').at(2).simulate('change',{target:{value:'Tomy123#'}});
    expect(wrapper.state().passwordValidator.indexOf(false)).to.equal(-1)
  });
});
