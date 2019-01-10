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

  render() {
    const date = this.props.closed
      ? `Closed on ${this.props.closedDate}`
      : `Due by ${this.props.dueDate}`;

    const navigateTo = () =>
      this.props.navigation.navigate('Task', { name: 'Task 1' });

    return (
      <TouchableOpacity onPress={navigateTo}>
        <Text testID="milestone-name">{this.props.name}</Text>
        <Text testID="date">{date}</Text>
        <TaskCounter tasks={this.props.tasks} />
        <ProgressIndicator percentage={100} />
      </TouchableOpacity>
    );
  }
}
