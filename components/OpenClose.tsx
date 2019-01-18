import React from 'react';
import { Button, View } from 'react-native';

export interface IOpenCloseProps {
  showOpen: () => void;
  showClosed: () => void;
}

export default class OpenClose extends React.Component<IOpenCloseProps> {
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
