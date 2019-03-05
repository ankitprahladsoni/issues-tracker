import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import IssueType from '../IssueType';

interface IssueIconProps {
  issueType: IssueType;
}

export default ({ issueType }: IssueIconProps) => {
  return (
    <FontAwesome
      testID="issue-icon"
      name={issueType}
      style={{ paddingRight: 5 }}
      size={20}
    />
  );
};
