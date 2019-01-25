import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import Issue from './Issue';
import Status from '../Status';

export interface IIssuesScreenProps {
  status: Status;
}

export default class IssuesScreen extends React.Component<
  NavigationScreenProps
> {
  navigateTo = () =>
    this.props.navigation.navigate('Issue', { name: 'Issue 1' });

  render() {
    const issues: IIssuesScreenProps[] = this.props.screenProps!.issues;

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
