import { takeSnapshotAsync } from 'expo';
import React from 'react';
import { Text, View } from 'react-native';
import TaskModal from './TaskModal';

export interface TaskCounterProps {
  tasks: TaskModal[];
}

export interface TaskCounterState {}

export default class TaskCounter extends React.Component<
  TaskCounterProps,
  TaskCounterState
> {
  constructor(props: TaskCounterProps) {
    super(props);

    this.state = {};
  }

  render() {
    const counterText = (tasks: TaskModal[]) => {
      if (tasks.length === 0) {
        return 'No Tasks';
      } else {
        const closedTasks = tasks.filter(t => t.closed).length;
        const allTasks = tasks.length;
        return `${closedTasks}/${allTasks}`;
      }
    };
    return (
      <View>
        <Text testID="counter-text">{counterText(this.props.tasks)}</Text>
      </View>
    );
  }
}
