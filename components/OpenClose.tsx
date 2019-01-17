import React from 'react';
import { View, Button } from 'react-native';

export interface OpenCloseProps {
  showOpen: Function;
  showClosed: Function;
}

export default class OpenClose extends React.Component<OpenCloseProps> {
  render() {
    return (
      <View>
        <Button
          testID="open-button"
          title="Open"
          onPress={() => this.props.showOpen()}
        />
        <Button
          testID="closed-button"
          title="Closed"
          onPress={() => this.props.showClosed()}
        />
      </View>
    );
  }
}
