import React from 'react';
import IssueType from '../IssueType';
import { shallow } from 'enzyme';
import IssueIcon from './IssueIcon';
import { propsForElementInsideWrapper } from 'testUtils/ElementUtils';

it.each`
  issueType         | icon
  ${IssueType.Task} | ${'task'}
  ${IssueType.Bug}  | ${'bug'}
`(
  'should have $icon icon when the issue type is $issueType',
  ({ issueType, icon }) => {
    const wrapper = shallow(<IssueIcon issueType={issueType} />);

    expect(propsForElementInsideWrapper(wrapper, 'issue-icon').name).toBe(icon);
  }
);
