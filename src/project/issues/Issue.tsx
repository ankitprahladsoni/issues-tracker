import React from 'react';
import { Text, View } from 'react-native';
import CheckListCounter from 'src/project/issues/CheckListCounter';
import IssueIcon from './IssueIcon';
import Lables from './Lables';
import StatusIndicator from './StatusIndicator';
import Status from '../Status';

export interface IIssueProps {
  title: string;
  assignee?: string;
  milestone: string;
  status: Status;
}

export default class Issue extends React.Component<IIssueProps> {
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
