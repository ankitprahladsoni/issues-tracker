import React from 'react';
import { Button, View } from 'react-native';

export interface IAddButtonProps {
  type: string;
}

export default class AddButton extends React.Component<IAddButtonProps> {
  render() {
    return (
      <View>
        <Button
          testID="add-button"
          title="Add"
          onPress={() => console.log('Add called')}
        />
      </View>
    );
  }
}
