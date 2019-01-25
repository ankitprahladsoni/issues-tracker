import React from 'react';
import { Text, View } from 'react-native';
import CheckListCounter from 'src/project/issues/CheckListCounter';
import IssueIcon from './IssueIcon';
import Lables from './Lables';
import StatusIndicator from './StatusIndicator';

type IssueProps = {
  title: string;
  assignee?: string;
  milestone: string;
};

export default class Issue extends React.Component<IssueProps> {
  render() {
    const assignee = `Assigned to ${this.props.assignee}`;
    return (
      <View>
        <Text testID="title">{this.props.title}</Text>
        <CheckListCounter />
        <IssueIcon />
        <Text testID="assignee">{assignee}</Text>
        <Text testID="milestone">{this.props.milestone}</Text>
        <StatusIndicator />
        <Lables />
      </View>
    );
  }
}
