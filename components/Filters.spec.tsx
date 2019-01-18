import { shallow } from 'enzyme';
import React from 'react';
import { elementFromWrapper } from 'testUtils/ElementUtils';
import Filters from './Filters';

const wrapper = shallow(<Filters type="milestone" />);
it('should have Button called Filters', () => {
  expect(elementFromWrapper(wrapper, 'filters').length).toBe(1);
});
