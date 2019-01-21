import { shallow } from 'enzyme';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { propsForElementInsideWrapper } from 'testUtils/ElementUtils';
import Status from '../Status';
import Milestone from './Milestone';
import MilestonesScreen from './MilestonesScreen';
import { createMilestoneProps } from './MilestoneTestUtil';

const openMilestone = createMilestoneProps({});
const closedMilestone = createMilestoneProps({ status: Status.Closed });

const navigateFn = jest.fn();
function createTestProps<T>(otherProps: T) {
  return {
    navigation: {
      navigate: navigateFn,
    },
    screenProps: {
      milestones: [openMilestone, closedMilestone],
      status: Status.Open,
    },
    ...otherProps,
  };
}

it("should display it's issues when clicked on it", () => {
  const props: any = createTestProps({});
  const wrapper = shallow(<MilestonesScreen {...props} />);

  propsForElementInsideWrapper(wrapper, 'milestone0').onPress();
  expect(navigateFn).toHaveBeenCalledWith('Issue', { name: 'Issue 1' });
});

describe('MilestonesScreen', () => {
  describe.each`
    status           | milestoneProps
    ${Status.Open}   | ${openMilestone}
    ${Status.Closed} | ${closedMilestone}
  `('When having screenProp status: $status', ({ status, milestoneProps }) => {
    it('should only display milestones with props $milestoneProps', () => {
      const props: any = createTestProps({});
      props.screenProps.status = status;
      const wrapper = shallow(<MilestonesScreen {...props} />);

      const touchableOpacityWrapper = wrapper.find(TouchableOpacity);
      expect(touchableOpacityWrapper.length).toBe(1);

      expect(
        touchableOpacityWrapper
          .first()
          .shallow()
          .containsMatchingElement(<Milestone {...milestoneProps} />)
      ).toBeTruthy();
    });
  });
});
