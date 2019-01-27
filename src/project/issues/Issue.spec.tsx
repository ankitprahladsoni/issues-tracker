import React from 'react';
import { shallow } from 'enzyme';
import Issue from './Issue';
import { createIssueProps } from './IssuesTestUtil';
import { valueFromWrapper } from 'testUtils/ElementUtils';
import TaskListCounter from './checkListCounter/TaskListCounter';
import IssueIcon from './issueIcon/IssueIcon';
import Lables from './Lables';
import StatusIndicator from './statusIndicator/StatusIndicator';

const title = 'First task';
const assignee = 'Assignee 1';
const milestone = 'Milestone 1';
const props: any = createIssueProps({ title, assignee, milestone });
const wrapper = shallow(<Issue {...props} />);

it('should have a title', () => {
  expect(valueFromWrapper(wrapper, 'title')).toBe(title);
});
it('should have a Checklist component', () => {
  expect(wrapper.find(TaskListCounter).length).toBe(1);
});
it('should have a Icon component', () => {
  expect(wrapper.find(IssueIcon).length).toBe(1);
});
it('should have Assignee', () => {
  expect(valueFromWrapper(wrapper, 'assignee')).toBe(`Assigned to ${assignee}`);
});
it('should have Labels component', () => {
  expect(wrapper.find(Lables).length).toBe(1);
});
it('should have a Status indicator', () => {
  expect(wrapper.find(StatusIndicator).length).toBe(1);
});
it('should have a milestone name', () => {
  expect(valueFromWrapper(wrapper, 'milestone')).toBe(milestone);
});
