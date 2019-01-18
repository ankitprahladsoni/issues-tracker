import React from 'react';
import { View, Button } from 'react-native';

export default class Filters extends React.Component {
  render() {
    return (
      <View>
        <Button
          testID="filters"
          title="Filters"
          onPress={() => console.log('Filters called')}
        />
      </View>
    );
  }
}
