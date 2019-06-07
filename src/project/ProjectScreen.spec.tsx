import AddButton from 'components/AddButton';
import Filters from 'components/Filters';
import OpenClose from 'components/OpenClose';
import { shallow } from 'enzyme';
import React from 'react';
import { propsForElementInsideWrapper } from 'testUtils/ElementUtils';
import ProjectScreen, { TabNavigator } from './ProjectScreen';
import Status from './Status';

describe('For Open/Closed button', () => {
  const wrapper = shallow(<ProjectScreen />);
  const openClose = wrapper.find(OpenClose).shallow();

  describe.each`
    button      | buttonId           | status
    ${'Open'}   | ${'open-button'}   | ${Status.Open}
    ${'Closed'} | ${'closed-button'} | ${Status.Closed}
  `('When $button button is pressed', ({ buttonId, status }) => {
    it('should pass screenProps.status as $status', () => {
      propsForElementInsideWrapper(openClose, buttonId).onPress();
      const screenProps = wrapper.find(TabNavigator).props().screenProps;

      expect(screenProps!.status).toBe(status);
    });
  });
});

describe(ProjectScreen.name, () => {
  const wrapper = shallow(<ProjectScreen />);

  it('should have a Filters component', () => {
    expect(wrapper.find(Filters).length).toBe(1);
  });

  it('should have a AddButton component', () => {
    expect(wrapper.find(AddButton).length).toBe(1);
  });
});
