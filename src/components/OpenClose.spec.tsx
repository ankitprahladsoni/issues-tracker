import { shallow } from 'enzyme';
import React from 'react';
import { elementFromWrapper } from 'testUtils/ElementUtils';
import OpenClose from './OpenClose';

const wrapper = shallow(<OpenClose showOpen={jest.fn} showClosed={jest.fn}/>);
it('should have Button called Open', () => {
  expect(elementFromWrapper(wrapper, 'open-button').length).toBe(1);
});

it('should have Button called Closed', () => {
  expect(elementFromWrapper(wrapper, 'closed-button').length).toBe(1);
});
