import React from 'react';
import { View, Text } from 'react-native';

export interface TaskCounterProps {
}

export interface TaskCounterState {
}

export default class TaskCounter extends React.Component<TaskCounterProps, TaskCounterState> {
  constructor(props: TaskCounterProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }
}
