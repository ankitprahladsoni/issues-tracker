import React from 'react';
import { shallow } from 'enzyme';
import BugsScreen from './BugsScreen';
import { Text } from 'react-native';

it('has a text Bugs!', () => {
  const wrapper = shallow(<BugsScreen />);

  expect(
    wrapper
      .find(Text)
      .render().text()
  ).toEqual('Bugs!')
});
