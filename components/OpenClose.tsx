import React from 'react';
import { View, Button } from 'react-native';

export interface OpenCloseProps {}

export interface OpenCloseState {}

export default class OpenClose extends React.Component<
  OpenCloseProps,
  OpenCloseState
> {
  constructor(props: OpenCloseProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <Button
          testID="open-button"
          title="Open"
          onPress={() => console.log('Open called')}
        />
        <Button
          testID="closed-button"
          title="Closed"
          onPress={() => console.log('Closed called')}
        />
      </View>
    );
  }
}
