import { shallow } from 'enzyme';
import React from 'react';
import { valueFromWrapper } from 'testUtils/ElementUtils';
import IssuesCounter from './IssuesCounter';

it('should display "No Tasks" if there are no tasks in it', () => {
  const wrapper = shallow(<IssuesCounter openIssues={0} closedIssues={0} />);
  expect(valueFromWrapper(wrapper, 'counter-text')).toEqual('No Issues');
});

it('should show total and completed task counter', () => {
  const wrapper = shallow(<IssuesCounter openIssues={1} closedIssues={1} />);
  expect(valueFromWrapper(wrapper, 'counter-text')).toEqual('1/2');
});
