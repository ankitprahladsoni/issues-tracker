import React from 'react';
import { Text, View } from 'react-native';

export interface IssuesCounterProps {
  openIssues: number;
  closedIssues: number;
}

export default class IssuesCounter extends React.Component<IssuesCounterProps> {
  counterText = () => {
    const { openIssues, closedIssues } = this.props;

    if (openIssues === 0 && closedIssues === 0) {
      return 'No Issues';
    }
    return `${closedIssues}/${openIssues + closedIssues}`;
  };

  render() {
    return (
      <View>
        <Text testID="counter-text">{this.counterText()}</Text>
      </View>
    );
  }
}
