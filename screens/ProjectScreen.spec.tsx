import AddButton from 'components/AddButton';
import Filters from 'components/Filters';
import OpenClose from 'components/OpenClose';
import { shallow } from 'enzyme';
import React from 'react';
import { propsForElementInsideWrapper } from 'testUtils/ElementUtils';
import ProjectScreen, { TabNavigator } from './ProjectScreen';

describe('For Open/Closed button', () => {
  const wrapper = shallow(<ProjectScreen />);
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

describe('RepositoryScreen', () => {
  const wrapper = shallow(<ProjectScreen />);

  it('should have a Filters component', () => {
    expect(wrapper.find(Filters).length).toBe(1);
  });

  it('should have a AddButton component', () => {
    expect(wrapper.find(AddButton).length).toBe(1);
  });
});
