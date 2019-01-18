import AddButton from 'components/AddButton';
import Filters from 'components/Filters';
import OpenClose from 'components/OpenClose';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { propsForElementInsideWrapper } from 'testUtils/ElementUtils';
import RepositoryScreen, { TabNavigator } from './RepositoryScreen';

let wrapper: ShallowWrapper;
beforeEach(() => {
  wrapper = shallow(<RepositoryScreen />);
});

describe('For Open/Closed button', () => {
  const wrapper = shallow(<RepositoryScreen />);
  const openClose = wrapper.find(OpenClose).shallow();

  describe.each`
    button      | buttonId           | shouldShowOpen
    ${'Open'}   | ${'open-button'}   | ${true}
    ${'Closed'} | ${'closed-button'} | ${false}
  `('When $button button is pressed', ({ buttonId, shouldShowOpen }) => {
    it('should pass screenProps.shouldShowOpen as $shouldShowOpen', () => {
      propsForElementInsideWrapper(openClose, buttonId).onPress();
      const screenProps = wrapper.find(TabNavigator).props().screenProps;

      expect(screenProps.shouldShowOpen).toBe(shouldShowOpen);
    });
  });
});

it('should have a Filters component', () => {
  expect(wrapper.find(Filters).length).toBe(1);
});

it('should have a AddButton component', () => {
  expect(wrapper.find(AddButton).length).toBe(1);
});
