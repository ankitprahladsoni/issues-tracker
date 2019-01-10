import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';
import BugsScreen from './BugsScreen';

it('has a text Bugs!', () => {
  const wrapper = shallow(<BugsScreen />);

  expect(
    wrapper
      .find(Text)
      .render()
      .text()
  ).toEqual('Bugs!');
});
