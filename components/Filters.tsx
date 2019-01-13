import React from 'react';
import { View, Button } from 'react-native';

export interface FiltersProps {}

export interface FiltersState {}

export default class Filters extends React.Component<
  FiltersProps,
  FiltersState
> {
  constructor(props: FiltersProps) {
    super(props);

    this.state = {};
  }

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
