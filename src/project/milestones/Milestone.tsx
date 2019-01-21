import React from 'react';
import { Text, View } from 'react-native';
import ProgressIndicator from 'components/ProgressIndicator';
import IssuesCounter from 'components/IssuesCounter';
import State from '../State';

export interface IMilestoneProps {
  title: string;
  description: string;
  state: State;
  openIssues: number;
  closedIssues: number;
  dueOn: Date;
  createdAt: Date;
  closedAt?: Date;
}

export default class Milestone extends React.Component<IMilestoneProps> {
  taskCompletionPercent = () => {
    const { openIssues, closedIssues } = this.props;
    return closedIssues === 0
      ? 0
      : (closedIssues * 100) / (openIssues + closedIssues);
  };

  render() {
    const {
      title,
      openIssues,
      closedIssues,
      dueOn,
      closedAt,
      state,
    } = this.props;

    const dateText =
      state === State.Closed
        ? `Closed at ${closedAt!.toUTCString()}`
        : `Due on ${dueOn.toDateString()}`;

    return (
      <View>
        <Text testID="milestone-title">{title}</Text>
        <Text testID="date">{dateText}</Text>
        <IssuesCounter openIssues={openIssues} closedIssues={closedIssues} />
        <ProgressIndicator percentage={this.taskCompletionPercent()} />
      </View>
    );
  }
}
