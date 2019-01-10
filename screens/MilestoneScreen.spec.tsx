import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';
import MilestoneScreen from './MilestoneScreen';

it('has a text Bugs!', () => {
  const wrapper = shallow(<MilestoneScreen />);

  expect(
    wrapper
      .find(Text)
      .render().text()
  ).toEqual('MileStones!');
});
