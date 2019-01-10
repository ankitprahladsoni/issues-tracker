import React from 'react';
import { Text, View } from 'react-native';
import TaskModal from './TaskModal';

export interface ITaskCounterProps {
  tasks: TaskModal[];
}

export default class TaskCounter extends React.Component<ITaskCounterProps> {
  constructor(props: ITaskCounterProps) {
    super(props);
    this.state = {};
  }

  counterText = (tasks: TaskModal[]) => {
    if (tasks.length === 0) {
      return 'No Tasks';
    }
    const closedTasks = tasks.filter(t => t.closed).length;
    return `${closedTasks}/${tasks.length}`;
  };

  render() {
    return (
      <View>
        <Text testID="counter-text">{this.counterText(this.props.tasks)}</Text>
      </View>
    );
  }
}
