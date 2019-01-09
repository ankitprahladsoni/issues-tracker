import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import TaskModal from './TaskModal';
import TaskCounter from './TaskCounter';
import ProgressIndicator from './ProgressIndicator';
import { NavigationScreenProps } from 'react-navigation';

export interface MilestoneProps extends NavigationScreenProps {
  name: string;
  tasks: TaskModal[];
  dueDate: string;
  closedDate?: string;
  closed: boolean;
}

export interface MilestoneState {}

export default class Milestone extends React.Component<
  MilestoneProps,
  MilestoneState
> {
  constructor(props: MilestoneProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const date = this.props.closed
      ? `Closed on ${this.props.closedDate}`
      : `Due by ${this.props.dueDate}`;

    const navigateTo = () =>
      this.props.navigation.navigate('Task', { name: 'Task 1' });

    return (
      <TouchableOpacity onPress={navigateTo}>
        <Text testID="milestone-name">{this.props.name}</Text>
        <Text testID="date">{date}</Text>
        <TaskCounter />
        <ProgressIndicator percentage={100}/>
      </TouchableOpacity>
    );
  }
}
