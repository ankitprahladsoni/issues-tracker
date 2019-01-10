import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';
import StoriesScreen from './StoriesScreen';

it('has a text Bugs!', () => {
  const wrapper = shallow(<StoriesScreen />);

  expect(
    wrapper
      .find(Text)
      .render()
      .text()
  ).toEqual('Stories!');
});
