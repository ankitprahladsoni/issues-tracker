import React from 'react';
import { Text, View } from 'react-native';
import ProgressIndicator from './ProgressIndicator';
import TaskCounter from './TaskCounter';
import TaskModal from './TaskModal';

export interface IMilestoneProps {
  name: string;
  tasks: TaskModal[];
  dueDate: string;
  closedDate?: string;
  closed: boolean;
}

export default class Milestone extends React.Component<IMilestoneProps> {
  constructor(props: IMilestoneProps) {
    super(props);
    this.state = {};
  }

  taskCompletionPercent = () => {
    const { tasks } = this.props;
    if (tasks.length === 0) {
      return -1;
    }
    const completedTasksLength = tasks.filter(t => t.closed).length;
    return (completedTasksLength * 100) / tasks.length;
  };

  render() {
    const { name, tasks, dueDate, closedDate, closed } = this.props;
    const dateText = closed ? `Closed on ${closedDate}` : `Due by ${dueDate}`;

    return (
      <View>
        <Text testID="milestone-name">{name}</Text>
        <Text testID="date">{dateText}</Text>
        <TaskCounter tasks={tasks} />
        <ProgressIndicator percentage={this.taskCompletionPercent()} />
      </View>
    );
  }
}
