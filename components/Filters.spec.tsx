import React from 'react';
import { shallow } from 'enzyme';
import { elementFromWrapper } from 'testUtils/ElementUtils';
import Filters from './Filters';

const wrapper = shallow(<Filters />);
it('should have Button called Filters', () => {
  expect(elementFromWrapper(wrapper, 'filters').length).toBe(1);
});
