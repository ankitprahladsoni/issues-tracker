import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import ProgressIndicator from './ProgressIndicator';
import TaskCounter from './TaskCounter';
import TaskModal from './TaskModal';

export interface IMilestoneProps extends NavigationScreenProps {
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
    const competedTasks = this.props.tasks.filter(t => t.closed).length;
    return (competedTasks * 100) / this.props.tasks.length;
  };

  navigateTo = () => this.props.navigation.navigate('Task', { name: 'Task 1' });

  render() {
    const { name, tasks, dueDate, closedDate, closed } = this.props;
    const date = closed ? `Closed on ${closedDate}` : `Due by ${dueDate}`;

    return (
      <TouchableOpacity onPress={this.navigateTo}>
        <Text testID="milestone-name">{name}</Text>
        <Text testID="date">{date}</Text>
        <TaskCounter tasks={tasks} />
        <ProgressIndicator percentage={this.taskCompletionPercent()} />
      </TouchableOpacity>
    );
  }
}
