import React from 'react';
import { Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import Task from '../Task';

export interface TaskListCounterProps {
  tasks: Task[];
}

export default class TaskListCounter extends React.Component<
  TaskListCounterProps
> {
  render() {
    const tasks: Task[] = this.props.tasks;
    if (tasks.length === 0) {
      return <View />;
    }

    const checked = tasks.filter(t => t.checked).length;
    const counter = `${checked}/${tasks.length}`;
    return (
      <View>
        <Octicons name="tasklist" />
        <Text testID="counter">{counter}</Text>
      </View>
    );
  }
}
