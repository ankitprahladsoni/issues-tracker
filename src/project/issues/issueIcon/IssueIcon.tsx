import { View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import IssueType from '../IssueType';

interface IIssueIconProps {
  issueType: IssueType;
}

export default class IssueIcon extends React.Component<IIssueIconProps> {
  render() {
    return (
      <View>
        <FontAwesome testID="issue-icon" name={this.props.issueType} />
      </View>
    );
  }
}
