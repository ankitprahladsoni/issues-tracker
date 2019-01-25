import { shallow } from 'enzyme';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import IssuesScreen from './IssuesScreen';
import Status from '../Status';
import { createIssueProps } from './IssuesTestUtil';
import Issue from './Issue';
import { propsForElementInsideWrapper } from 'testUtils/ElementUtils';

const openIssue = createIssueProps({});
const closedIssue = createIssueProps({ status: Status.Closed });

const navigateFn = jest.fn();
function createTestProps<T>(otherProps: T) {
  return {
    navigation: {
      navigate: navigateFn,
    },
    screenProps: {
      issues: [openIssue, closedIssue],
      status: Status.Open,
    },
    ...otherProps,
  };
}

it('should display specific issue  when clicked on it', () => {
  const props: any = createTestProps({});
  const wrapper = shallow(<IssuesScreen {...props} />);

  propsForElementInsideWrapper(wrapper, 'issue0').onPress();
  expect(navigateFn).toHaveBeenCalledWith('Issue', { name: 'Issue 1' });
});

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

      const touchableOpacityWrapper = wrapper.find(TouchableOpacity);
      expect(touchableOpacityWrapper.length).toBe(1);

      expect(
        touchableOpacityWrapper
          .first()
          .shallow()
          .containsMatchingElement(<Issue {...issueProps} />)
      ).toBeTruthy();
    });
  });
});
