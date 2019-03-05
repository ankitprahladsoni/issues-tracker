import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
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
    const counterText = `${checked}/${tasks.length} tasks completed`;
    return (
      <View style={styles.view}>
        <Octicons name="tasklist" style={{ paddingRight: 5 }} />
        <Text testID="counterText">{counterText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: { flexDirection: 'row', alignItems: 'center' },
});
