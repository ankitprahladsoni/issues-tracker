import React from 'react';
import Milestone from './Milestone';
import { shallow } from 'enzyme';
import { valueFromWrapper } from 'testUtils/ElementUtils';
import TaskCounter from './TaskCounter';

it('should display the name of milestone', () => {
  const milestoneName = 'First milestone';
  const wrapper = shallow(
    <Milestone name={milestoneName} tasks={[]} dueDate="01/01/2020" />
  );
  expect(valueFromWrapper(wrapper, 'milestone-name')).toEqual(milestoneName);
});

it('should have a TaskCounter component', () => {
  const wrapper = shallow(
    <Milestone name="firstMilestone" tasks={[]} dueDate="01/01/2020" />
  );
  expect(wrapper.find(TaskCounter).length).toBe(1);
});

it("should display it's tasks when clicked on it", () => {});

describe('Open milestone', () => {
  it('should show expected end time of the milestone', () => {
    const wrapper = shallow(
      <Milestone name="firstMilestone" tasks={[]} dueDate="01/01/2020" />
    );
    expect(valueFromWrapper(wrapper, 'date')).toBe('01/01/2020');
  });

  it('should have Grey band if there are no tasks in it', () => {});
  it('should have Red band if <30% tasks are completed', () => {});
  it('should have Yellow band if 30%-70% tasks are completed', () => {});
  it('should have Green band if > 70% tasks are completed', () => {});
});

describe('Closed milestone', () => {
  it('should not display any color band', () => {});
  it('should show completed date', () => {});
});
