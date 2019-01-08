import React from 'react';
import Milestone from './Milestone';
import { shallow } from 'enzyme';
import { valueFromWrapper } from 'testUtils/ElementUtils';
import TaskCounter from './TaskCounter';
import ProgressIndicator from './ProgressIndicator';

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

it('should have a ProgressIndicator component', () => {
  const wrapper = shallow(
    <Milestone name="firstMilestone" tasks={[]} dueDate="01/01/2020" />
  );
  expect(wrapper.find(ProgressIndicator).length).toBe(1);
});

it("should display it's tasks when clicked on it", () => {});

describe('Open milestone', () => {
  it('should show expected end time of the milestone', () => {
    const wrapper = shallow(
      <Milestone name="firstMilestone" tasks={[]} dueDate="01/01/2020" />
    );
    expect(valueFromWrapper(wrapper, 'date')).toBe('01/01/2020');
  });
});

describe('Closed milestone', () => {
  it('should show completed date', () => {});
});
