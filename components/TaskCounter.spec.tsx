import { shallow } from 'enzyme';
import React from 'react';
import { valueFromWrapper } from 'testUtils/ElementUtils';
import TaskCounter from './TaskCounter';

it('should display "No Tasks" if there are no tasks in it', () => {
  const wrapper = shallow(<TaskCounter tasks={[]} />);
  expect(valueFromWrapper(wrapper, 'counter-text')).toEqual('No Tasks');
});

it('should show total and completed task counter', () => {
  const wrapper = shallow(
    <TaskCounter tasks={[{ closed: true }, { closed: false }]} />
  );
  expect(valueFromWrapper(wrapper, 'counter-text')).toEqual('1/2');
});
