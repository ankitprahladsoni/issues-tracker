import React from 'react';
import { View, Button } from 'react-native';

export interface AddButtonProps {}

export interface AddButtonState {}

export default class AddButton extends React.Component<
  AddButtonProps,
  AddButtonState
> {
  constructor(props: AddButtonProps) {
    super(props);

    this.state = {};
  }

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
