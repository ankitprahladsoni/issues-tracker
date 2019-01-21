import { shallow } from 'enzyme';
import React from 'react';
import ProgressIndicator from './ProgressIndicator';

it.each`
  color       | percentage
  ${'grey'}   | ${-1}
  ${'red'}    | ${25}
  ${'orange'} | ${60}
  ${'green'}  | ${95}
`(
  'should have $color band if $percentage issues are completed',
  ({ color, percentage }) => {
    const wrapper = shallow(<ProgressIndicator percentage={percentage} />);

    expect(wrapper.prop('style')).toHaveProperty('backgroundColor', color);
  }
);
