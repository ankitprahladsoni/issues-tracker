import { ShallowWrapper } from 'enzyme';

export function valueFromWrapper(
  wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>,
  elementId: String
) {
  return wrapper.findWhere(cmd => cmd.props().testID === elementId).props()
    .children;
}
