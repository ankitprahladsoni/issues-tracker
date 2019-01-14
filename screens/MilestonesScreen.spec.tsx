import AddButton from 'components/AddButton';
import Filters from 'components/Filters';
import OpenClose from 'components/OpenClose';
import { shallow } from 'enzyme';
import React from 'react';
import { propsForElementInsideWrapper } from 'testUtils/ElementUtils';
import MilestonesScreen from './MilestonesScreen';

const navigateFn = jest.fn();
function createTestProps<T>(otherProps: T) {
  return {
    navigation: {
      navigate: navigateFn,
    },
    ...otherProps,
  };
}

const props: any = createTestProps({});
const wrapper = shallow(<MilestonesScreen {...props} />);

it("should display it's tasks when clicked on it", () => {
  propsForElementInsideWrapper(wrapper, 'milestone').onPress();
  expect(navigateFn).toHaveBeenCalledWith('Task', { name: 'Task 1' });
});
