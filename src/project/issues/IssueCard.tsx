import React from 'react';
import TaskListCounter from './checkListCounter/TaskListCounter';
import IssueIcon from './issueIcon/IssueIcon';
import { getStatusColor } from './statusIndicator/StatusIndicator';
import Status from '../Status';
import IssueType from './IssueType';
import Task from './Task';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  View,
  Left,
} from 'native-base';

export interface IssueCardProps {
  title: string;
  assignee?: string;
  milestone: string;
  status: Status;
  issueType: IssueType;
  tasks: Task[];
}

export default ({
  title,
  assignee,
  milestone,
  status,
  issueType,
  tasks,
}: IssueCardProps) => {
  const assignedTo = `Assigned to ${assignee}`;
  return (
    <Container>
      <Content>
        <Card>
          <CardItem
            style={{
              borderLeftColor: getStatusColor(status),
              borderLeftWidth: 5,
              paddingRight: 5,
              paddingLeft: 5,
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <Left>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingBottom: 5,
                  }}
                >
                  <IssueIcon issueType={issueType} />
                  <Text testID="title" style={{ fontSize: 25 }}>
                    {title}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TaskListCounter tasks={tasks} />
                </View>
              </View>
            </Left>

            <View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text testID="assignedTo">{assignedTo}</Text>
                <Text testID="milestone">{milestone}</Text>
              </View>
            </View>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
