import React from 'react';
import { shallow } from 'enzyme';
import TaskModal from './TaskModal';
import TaskCounter from './TaskCounter';
import { valueFromWrapper } from 'testUtils/ElementUtils';

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
