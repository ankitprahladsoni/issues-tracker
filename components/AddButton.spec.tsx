import React from 'react';
import { shallow } from 'enzyme';
import { elementFromWrapper } from 'testUtils/ElementUtils';
import AddButton from './AddButton';

const wrapper = shallow(<AddButton />);
it('should have Button called Add', () => {
  expect(elementFromWrapper(wrapper, 'add-button').length).toBe(1);
});
