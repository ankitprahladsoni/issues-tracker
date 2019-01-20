import Milestone from 'components/Milestone';
import { shallow } from 'enzyme';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { propsForElementInsideWrapper } from 'testUtils/ElementUtils';
import MilestonesScreen from './MilestonesScreen';

const openMilestone = {
  name: 'test Open',
  dueDate: '01/01/2020',
  tasks: [{ closed: true }, { closed: false }],
  closed: false,
};
const closedMilestone = {
  name: 'test Closed',
  dueDate: '01/01/2020',
  tasks: [{ closed: true }, { closed: false }],
  closed: true,
};
const navigateFn = jest.fn();
function createTestProps<T>(otherProps: T) {
  return {
    navigation: {
      navigate: navigateFn,
    },
    screenProps: {
      milestones: [openMilestone, closedMilestone],
      shouldShowOpen: true,
    },
    ...otherProps,
  };
}

it("should display it's tasks when clicked on it", () => {
  const props: any = createTestProps({});
  const wrapper = shallow(<MilestonesScreen {...props} />);

  propsForElementInsideWrapper(wrapper, 'milestone0').onPress();
  expect(navigateFn).toHaveBeenCalledWith('Task', { name: 'Task 1' });
});

describe('MilestonesScreen', () => {
  describe.each`
    shouldShowOpen | milestoneProps
    ${true}        | ${openMilestone}
    ${false}       | ${closedMilestone}
  `(
    'When having screenProp shouldShowOpen: $shouldShowOpen',
    ({ shouldShowOpen, milestoneProps }) => {
      it('should only display milestones with props $milestoneProps', () => {
        const props: any = createTestProps({});
        props.screenProps.shouldShowOpen = shouldShowOpen;
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
    }
  );
});
