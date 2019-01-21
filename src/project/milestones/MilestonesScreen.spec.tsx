import { shallow } from 'enzyme';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Milestone from 'src/project/milestones/Milestone';
import { propsForElementInsideWrapper } from 'testUtils/ElementUtils';
import MilestonesScreen from './MilestonesScreen';
import State from '../State';

const openMilestone = {
  dueDate: '01/01/2020',
  state: State.Open,
  openIssues: 0,
  closedIssues: 0,
  dueOn: new Date('Mon, 21 Jan 2019 00:30:14 GMT'),
};
const closedMilestone = {
  dueDate: '01/01/2020',
  state: State.Closed,
  openIssues: 0,
  closedIssues: 0,
  dueOn: new Date('Mon, 21 Jan 2019 00:30:14 GMT'),
};
const navigateFn = jest.fn();
function createTestProps<T>(otherProps: T) {
  return {
    navigation: {
      navigate: navigateFn,
    },
    screenProps: {
      milestones: [openMilestone, closedMilestone],
      state: State.Open,
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
    state           | milestoneProps
    ${State.Open}   | ${openMilestone}
    ${State.Closed} | ${closedMilestone}
  `('When having screenProp state: $state', ({ state, milestoneProps }) => {
    it('should only display milestones with props $milestoneProps', () => {
      const props: any = createTestProps({});
      props.screenProps.state = state;
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
