import React from 'react';
import { Text, View } from 'react-native';
import CheckListCounter from './CheckListCounter';
import IssueIcon from './issueIcon/IssueIcon';
import Lables from './Lables';
import StatusIndicator from './StatusIndicator';
import Status from '../Status';
import IssueType from './IssueType';

export interface IIssueProps {
  title: string;
  assignee?: string;
  milestone: string;
  status: Status;
  issueType: IssueType;
}

export default class Issue extends React.Component<IIssueProps> {
  render() {
    const assignee = `Assigned to ${this.props.assignee}`;
    return (
      <View>
        <Text testID="title">{this.props.title}</Text>
        <CheckListCounter />
        <IssueIcon issueType={this.props.issueType} />
        <Text testID="assignee">{assignee}</Text>
        <Text testID="milestone">{this.props.milestone}</Text>
        <StatusIndicator />
        <Lables />
      </View>
    );
  }
}
