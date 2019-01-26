import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import Issue, { IIssueProps } from './Issue';
import IssueType from './IssueType';
import Status from '../Status';

export default class IssuesScreen extends React.Component<
  NavigationScreenProps
> {
  navigateTo = () =>
    this.props.navigation.navigate('Issue', { name: 'Issue 1' });

  render() {
    const issues: IIssueProps[] = [
      {
        title: 'Task1',
        status: Status.Open,
        milestone: 'None',
        issueType: IssueType.Task,
        tasks: [{ checked: false }],
      },
      {
        title: 'Task2',
        status: Status.Closed,
        milestone: 'None',
        issueType: IssueType.Bug,
        tasks: [{ checked: false }],
      }
    ];

    const issueComponents = issues
      .filter(m => m.status === this.props.screenProps!.status)
      .map((m, index) => (
        <TouchableOpacity
          onPress={this.navigateTo}
          testID={`issue${index}`}
          key={index}
        >
          <Issue {...m} />
        </TouchableOpacity>
      ));

    return <View>{issueComponents}</View>;
  }
}
