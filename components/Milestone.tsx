import React from 'react';
import { View, Text } from 'react-native';
import TaskModal from './TaskModal';
import TaskCounter from './TaskCounter';
import ProgressIndicator from './ProgressIndicator';

export interface MilestoneProps {
  name: string;
  tasks: TaskModal[];
  dueDate: string;
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
    return (
      <View>
        <Text testID="milestone-name">{this.props.name}</Text>
        <Text testID="date">{this.props.dueDate}</Text>
        <TaskCounter />
        <ProgressIndicator />
      </View>
    );
  }
}
