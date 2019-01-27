import React from 'react';
import { View } from 'react-native';
import Status from 'src/project/Status';

export interface StatusIndicatorProps {
  status: Status;
}

export default class StatusIndicator extends React.Component<
  StatusIndicatorProps
> {
  getColor = (status: Status) => {
    switch (status) {
      case Status.Open:
        return 'red';
      case Status.InProgress:
        return 'orange';
      case Status.Closed:
        return 'green';
    }
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: this.getColor(this.props.status),
          height: 50,
          width: 5,
        }}
      />
    );
  }
}
