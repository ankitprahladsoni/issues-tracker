import React from 'react';
import { Text, View } from 'react-native';
import TaskListCounter from './checkListCounter/TaskListCounter';
import IssueIcon from './issueIcon/IssueIcon';
import Lables from './Lables';
import StatusIndicator from './statusIndicator/StatusIndicator';
import Status from '../Status';
import IssueType from './IssueType';
import Task from './Task';

export interface IssueProps {
  title: string;
  assignee?: string;
  milestone: string;
  status: Status;
  issueType: IssueType;
  tasks: Task[];
}

export default class Issue extends React.Component<IssueProps> {
  render() {
    const assignee = `Assigned to ${this.props.assignee}`;
    return (
      <View>
        <Text testID="title">{this.props.title}</Text>
        <TaskListCounter tasks={this.props.tasks} />
        <IssueIcon issueType={this.props.issueType} />
        <Text testID="assignee">{assignee}</Text>
        <Text testID="milestone">{this.props.milestone}</Text>
        <StatusIndicator status={this.props.status} />
        <Lables />
      </View>
    );
  }
}
