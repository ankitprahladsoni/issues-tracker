import { shallow } from 'enzyme';
import React from 'react';
import { Modal } from 'react-native';
import {
  elementFromWrapper,
  propsForElementInsideWrapper,
} from 'testUtils/ElementUtils';
import Filters from './Filters';

const wrapper = shallow(<Filters type="milestone" />);
it('should have Button called Filters', () => {
  expect(elementFromWrapper(wrapper, 'filters-button').length).toBe(1);
});

describe('When pressed', () => {
  it('should open filter modal', () => {
    propsForElementInsideWrapper(wrapper, 'filters-button').onPress();
    expect(
      wrapper
        .find(Modal)
        .first()
        .shallow()
        .props().visible
    ).toBeTruthy();

    propsForElementInsideWrapper(wrapper, 'close').onPress();
    expect(
      wrapper
        .find(Modal)
        .first()
        .shallow()
        .props().visible
    ).toBeFalsy();
  });
});
