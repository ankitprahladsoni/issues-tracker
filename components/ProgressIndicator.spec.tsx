import { shallow } from 'enzyme';
import React from 'react';
import ProgressIndicator from './ProgressIndicator';

it('should have Grey band if there are no tasks in it', () => {
  const wrapper = shallow(<ProgressIndicator />);

  expect(wrapper.prop('style')).toHaveProperty('backgroundColor', 'grey');
});

it('should have Red band if <30% tasks are completed', () => {
  const wrapper = shallow(<ProgressIndicator percentage={25} />);

  expect(wrapper.prop('style')).toHaveProperty('backgroundColor', 'red');
});

it('should have Yellow band if 30%-70% tasks are completed', () => {
  const wrapper = shallow(<ProgressIndicator percentage={60} />);

  expect(wrapper.prop('style')).toHaveProperty('backgroundColor', 'orange');
});

it('should have Green band if > 70% tasks are completed', () => {
  const wrapper = shallow(<ProgressIndicator percentage={95} />);

  expect(wrapper.prop('style')).toHaveProperty('backgroundColor', 'green');
});
