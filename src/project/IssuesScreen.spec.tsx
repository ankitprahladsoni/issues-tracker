import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';
import IssuesScreen from './IssuesScreen';

it('has a text Bugs!', () => {
  const wrapper = shallow(<IssuesScreen />);

  expect(
    wrapper
      .find(Text)
      .render()
      .text()
  ).toEqual('Issues!');
});
