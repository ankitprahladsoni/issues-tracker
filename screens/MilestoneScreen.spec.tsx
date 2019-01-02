import React from 'react';
import { shallow } from 'enzyme';
import MilestoneScreen from './MilestoneScreen';
import { Text } from 'react-native';

it('has a text Bugs!', () => {
  const wrapper = shallow(<MilestoneScreen />);

  expect(
    wrapper
      .find(Text)
      .render().text()
  ).toEqual('MileStones!')
});
