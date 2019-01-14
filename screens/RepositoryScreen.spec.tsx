import React from 'react';
import { shallow } from 'enzyme';
import RepositoryScreen from './RepositoryScreen';
import OpenClose from 'components/OpenClose';
import Filters from 'components/Filters';
import AddButton from 'components/AddButton';

const wrapper = shallow(<RepositoryScreen />);
it('should have a OpenClose component', () => {
  expect(wrapper.find(OpenClose).length).toBe(1);
});

it('should have a Filters component', () => {
  expect(wrapper.find(Filters).length).toBe(1);
});

it('should have a AddButton component', () => {
  expect(wrapper.find(AddButton).length).toBe(1);
});
