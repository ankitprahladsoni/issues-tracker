import { shallow } from 'enzyme';
import React from 'react';
import { Modal } from 'react-native';
import {
  elementFromWrapper,
  propsForElementInsideWrapper,
} from 'testUtils/ElementUtils';
import AddButton from './AddButton';

const wrapper = shallow(<AddButton type="milestone" />);
it('should have Button called Add', () => {
  expect(elementFromWrapper(wrapper, 'add-button').length).toBe(1);
});

describe('When pressed', () => {
  it('should open filter modal', () => {
    propsForElementInsideWrapper(wrapper, 'add-button').onPress();
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
