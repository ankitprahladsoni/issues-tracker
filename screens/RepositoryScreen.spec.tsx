import React from 'react';
import { shallow } from 'enzyme';
import RepositoryScreen, { TabNavigator } from './RepositoryScreen';
import OpenClose from 'components/OpenClose';
import Filters from 'components/Filters';
import AddButton from 'components/AddButton';
import { propsForElementInsideWrapper } from 'testUtils/ElementUtils';
import Milestone from 'components/Milestone';
import renderer from 'react-test-renderer';

const wrapper = shallow(<RepositoryScreen />);
it('should have a OpenClose component', () => {
  expect(wrapper.find(OpenClose).length).toBe(1);
});

it('should have a Filters component', () => {
  expect(wrapper.find(Filters).length).toBe(1);
});

it('should have a AddButton component', () => {
  expect(wrapper.find(AddButton).length).toBe(1);
});

describe('For Open/Closed button', () => {
  const wrapper = shallow(<RepositoryScreen />);
  const openClose = wrapper.find(OpenClose).shallow();

  describe('When Open button is pressed', () => {
    it('should pass screenProps as { closed: false }', () => {
      propsForElementInsideWrapper(openClose, 'open-button').onPress();
      const screenProps = wrapper.find(TabNavigator).props().screenProps;

      expect(screenProps).toEqual({ closed: false });
    });
  });

  describe('When Closed button is pressed', () => {
    it('should pass screenProps as { closed: true }', () => {
      propsForElementInsideWrapper(openClose, 'closed-button').onPress();
      const screenProps = wrapper.find(TabNavigator).props().screenProps;

      expect(screenProps).toEqual({ closed: true });
    });
  });
});
