import { shallow } from 'enzyme';
import React from 'react';
import StatusIndicator from './StatusIndicator';
import Status from 'src/project/Status';

it.each`
  color       | status
  ${'red'}    | ${Status.Open}
  ${'orange'} | ${Status.InProgress}
  ${'green'}  | ${Status.Closed}
`(
  'should have $color band if status is $status',
  ({ color, status }) => {
    const wrapper = shallow(<StatusIndicator status={status} />);

    expect(wrapper.prop('style')).toHaveProperty('backgroundColor', color);
  }
);
