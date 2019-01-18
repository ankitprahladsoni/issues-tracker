import { shallow } from 'enzyme';
import React from 'react';
import { elementFromWrapper } from 'testUtils/ElementUtils';
import AddButton from './AddButton';

const wrapper = shallow(<AddButton type="milestone" />);
it('should have Button called Add', () => {
  expect(elementFromWrapper(wrapper, 'add-button').length).toBe(1);
});
