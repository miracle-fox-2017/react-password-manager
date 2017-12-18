import React from 'react';
import { string } from 'prop-types';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Link from '../src/components/Link';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('test simple', () => {
  test('works!!!', () => {
    expect(true).toEqual(true)
  })
})