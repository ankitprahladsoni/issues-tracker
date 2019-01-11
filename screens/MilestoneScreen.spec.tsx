import { shallow } from 'enzyme';
import React from 'react';
import MilestoneScreen from './MilestoneScreen';

const navigateFn = jest.fn();
function createTestProps<T>(props: T) {
  return {
    navigation: {
      navigate: navigateFn,
    },

    ...props,
  };
}

it("should display it's tasks when clicked on it", () => {
  let props: any = createTestProps({});
  const wrapper = shallow(<MilestoneScreen {...props} />);
  wrapper.props().onPress();
  expect(navigateFn).toHaveBeenCalledWith('Task', { name: 'Task 1' });
});
