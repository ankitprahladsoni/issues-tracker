import React from 'react';
import Milestone from './Milestone';
import { shallow } from 'enzyme';
import TaskModal from './TaskModal';
import { valueFromWrapper } from 'testUtils/ElementUtils';

it('should display the name of milestone', () => {
  const milestoneName = 'First milestone';
  const wrapper = shallow(<Milestone name={milestoneName} tasks={[]} />);

  expect(valueFromWrapper(wrapper, 'milestone-name')).toEqual(milestoneName);
});

it('should display "No Tasks" if there are no tasks in it', () => {
  const tasks: TaskModal[] = [];
  const wrapper = shallow(<Milestone name="firstMilestone" tasks={tasks} />);

  expect(valueFromWrapper(wrapper, 'task-count')).toEqual('No Tasks');
});

it('should show task counter', () => {});
it("should display it's tasks when clicked on it", () => {});

describe('Open milestone', () => {
  it('should show expected end time of the milestone', () => {});
  it('should have Grey band if there are no tasks in it', () => {});
  it('should have Red band if <30% tasks are completed', () => {});
  it('should have Yellow band if 30%-70% tasks are completed', () => {});
  it('should have Green band if > 70% tasks are completed', () => {});
});

describe('Closed milestone', () => {
  it('should not display any color band', () => {});
  it('should show completed date', () => {});
});
