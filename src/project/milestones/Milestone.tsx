import IssuesCounter from 'components/IssuesCounter';
import ProgressIndicator from 'components/ProgressIndicator';
import React from 'react';
import { Text, View } from 'react-native';
import Status from '../Status';

export interface IMilestoneProps {
  title: string;
  description: string;
  status: Status;
  openIssues: number;
  closedIssues: number;
  dueOn: Date;
  createdAt: Date;
  closedAt?: Date;
}

export default class Milestone extends React.Component<IMilestoneProps> {
  issuesCompletionPercent = () => {
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
      status,
    } = this.props;

    const dateText =
      status === Status.Closed
        ? `Closed at ${closedAt!.toUTCString()}`
        : `Due on ${dueOn.toDateString()}`;

    return (
      <View>
        <Text testID="milestone-title">{title}</Text>
        <Text testID="date">{dateText}</Text>
        <IssuesCounter openIssues={openIssues} closedIssues={closedIssues} />
        <ProgressIndicator percentage={this.issuesCompletionPercent()} />
      </View>
    );
  }
}
