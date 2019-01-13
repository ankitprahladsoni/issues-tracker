import { ShallowWrapper } from 'enzyme';

export function valueFromWrapper(
  wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>,
  elementId: string
) {
  return propsForElementInsideWrapper(wrapper, elementId).children;
}

export function propsForElementInsideWrapper(
  wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>,
  elementId: string
) {
  return elementFromWrapper(wrapper, elementId).props();
}

export function elementFromWrapper(
  wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>,
  elementId: string
) {
  return wrapper.findWhere(cmd => cmd.props().testID === elementId);
}
