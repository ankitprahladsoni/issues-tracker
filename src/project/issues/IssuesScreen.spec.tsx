import { shallow } from 'enzyme';
import React from 'react';
import IssuesScreen from './IssuesScreen';
import Status from '../Status';
import { createIssueProps } from './IssuesTestUtil';
import Issue from './Issue';

const openIssue = createIssueProps({});
const closedIssue = createIssueProps({ status: Status.Closed });

function createTestProps<T>(otherProps: T) {
  return {
    screenProps: {
      issues: [openIssue, closedIssue],
      status: Status.Open,
    },
    ...otherProps,
  };
}

describe('IssuesScreen', () => {
  describe.each`
    status           | issueProps
    ${Status.Open}   | ${openIssue}
    ${Status.Closed} | ${closedIssue}
  `('When having screenProp status: $status', ({ status, issueProps }) => {
    it('should only display issues with props $issueProps', () => {
      const props: any = createTestProps({});
      props.screenProps.status = status;
      const wrapper = shallow(<IssuesScreen {...props} />);

      const touchableOpacityWrapper = wrapper.find(Issue);
      expect(touchableOpacityWrapper.length).toBe(1);
    });
  });
});
