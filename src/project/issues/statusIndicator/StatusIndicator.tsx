import React from 'react';
import { View } from 'react-native';
import Status from 'src/project/Status';

export interface StatusIndicatorProps {
  status: Status;
}

export default class StatusIndicator extends React.Component<
  StatusIndicatorProps
> {
  render() {
    return (
      <View
        style={{
          backgroundColor: getColor(this.props.status),
          height: 50,
          width: 5,
        }}
      />
    );
  }
}

export const getColor = (status: Status) => {
  switch (status) {
    case Status.Open:
      return 'red';
    case Status.InProgress:
      return 'orange';
    case Status.Closed:
      return 'green';
  }
};
