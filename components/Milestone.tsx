import React from 'react';
import { View, Text } from 'react-native';
import TaskModal from './TaskModal';

export interface MilestoneProps {
  name: String;
  tasks: TaskModal[];
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
        <Text testID="task-count">No Tasks</Text>
      </View>
    );
  }
}
