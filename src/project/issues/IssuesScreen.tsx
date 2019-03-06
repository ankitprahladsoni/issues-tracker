import React from 'react';
import { View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import IssueCard, { IssueCardProps } from './IssueCard';
import IssueType from './IssueType';
import Status from '../Status';

export default class IssuesScreen extends React.Component<
  NavigationScreenProps
> {
  render() {
    const issues: IssueCardProps[] = [
      {
        title: 'Task1',
        status: Status.Open,
        milestone: 'No Milestone',
        issueType: IssueType.Task,
        tasks: [{ checked: false }],
        assignee: 'Ankit',
      },
      {
        title: 'Task2',
        status: Status.Closed,
        milestone: 'No Milestone',
        issueType: IssueType.Bug,
        tasks: [{ checked: false }],
        assignee: 'Ankit',
      },
    ];

    const issueComponents = issues
      .filter(m => m.status === this.props.screenProps!.status)
      .map((m, index) => <IssueCard {...m} key={index} />);

    return <View style={{ flex: 1 }}>{issueComponents}</View>;
  }
}
