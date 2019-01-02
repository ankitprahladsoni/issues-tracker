import React from 'react';
import { shallow } from 'enzyme';
import StoriesScreen from './StoriesScreen';
import { Text } from 'react-native';

it('has a text Bugs!', () => {
  const wrapper = shallow(<StoriesScreen />);

  expect(
    wrapper
      .find(Text)
      .render().text()
  ).toEqual('Stories!')
});
