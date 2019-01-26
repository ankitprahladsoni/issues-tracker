import React from 'react';
import { shallow } from 'enzyme';
import TaskListCounter from './TaskListCounter';
import { Octicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { valueFromWrapper } from 'testUtils/ElementUtils';
import Task from '../Task';

const tasks_0_2: Task[] = [{ checked: false }, { checked: false }];
const tasks_1_2: Task[] = [{ checked: false }, { checked: true }];

it('should not display counter if there are no items in the taskList', () => {
  const wrapper = shallow(<TaskListCounter tasks={[]} />);
  expect(wrapper.find(Text).length).toBe(0);
});

it('should have a tasklist icon if are items in the taskList', () => {
  const wrapper = shallow(<TaskListCounter tasks={tasks_0_2} />);
  expect(wrapper.find(Octicons).length).toBe(1);
});

it.each`
  tasks        | counter
  ${tasks_0_2} | ${'0/2'}
  ${tasks_1_2} | ${'1/2'}
`(
  'should display counter as $counter for tasks $tasks',
  ({ tasks, counter }) => {
    const wrapper = shallow(<TaskListCounter tasks={tasks} />);
    expect(valueFromWrapper(wrapper, 'counter')).toBe(counter);
  }
);
