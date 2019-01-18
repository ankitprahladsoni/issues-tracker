import React from 'react';
import { Button, View } from 'react-native';
export interface IFiltersProps {
  type: string;
}

export default class Filters extends React.Component<IFiltersProps> {
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
