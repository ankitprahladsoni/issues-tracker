import React from 'react';
import { View, Text } from 'react-native';
import TaskModal from './TaskModal';
import TaskCounter from './TaskCounter';
import ProgressIndicator from './ProgressIndicator';

export interface MilestoneProps {
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
    const date = this.props.closed ? `Closed on ${this.props.closedDate}` : `Due by ${this.props.dueDate}`;
    return (
      <View>
        <Text testID="milestone-name">{this.props.name}</Text>
        <Text testID="date">{date}</Text>
        <TaskCounter />
        <ProgressIndicator />
      </View>
    );
  }
}
