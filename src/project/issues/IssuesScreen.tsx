import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import Issue, { IIssueProps } from './Issue';

export default class IssuesScreen extends React.Component<
  NavigationScreenProps
> {
  navigateTo = () =>
    this.props.navigation.navigate('Issue', { name: 'Issue 1' });

  render() {
    const issues: IIssueProps[] = this.props.screenProps!.issues;

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
