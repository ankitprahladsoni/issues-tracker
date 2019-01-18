import React from 'react';
import { View, Button } from 'react-native';

export default class AddButton extends React.Component {
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
