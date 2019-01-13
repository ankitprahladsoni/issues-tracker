import AddButton from 'components/AddButton';
import Filters from 'components/Filters';
import OpenClose from 'components/OpenClose';
import { shallow } from 'enzyme';
import React from 'react';
import {
  propsForElementInsideWrapper,
} from 'testUtils/ElementUtils';
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

it('should have a OpenClose component', () => {
  expect(wrapper.find(OpenClose).length).toBe(1);
});

it('should have a Filters component', () => {
  expect(wrapper.find(Filters).length).toBe(1);
});

it('should have a AddButton component', () => {
  expect(wrapper.find(AddButton).length).toBe(1);
});
