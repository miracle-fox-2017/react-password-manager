import renderer from 'react-test-renderer'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
import store from './store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MenuExampleSecondary } from './components/Navbar'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('Navbar component testing', () => {
  const wrapper = shallow(<MenuExampleSecondary/>)
  console.log(wrapper.find('MenuItem').length)
  it('Should have div with class Ui secondary menu', () => {
    expect(wrapper.find('MenuItem').at(0).prop('name')).toEqual('Password Manager')
  })
})
