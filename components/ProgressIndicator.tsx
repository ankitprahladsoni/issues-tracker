import * as React from 'react';
import { View } from 'react-native';

export interface ProgressIndicatorProps {
  percentage?: number;
}

export interface ProgressIndicatorState {}

export default class ProgressIndicator extends React.Component<
  ProgressIndicatorProps,
  ProgressIndicatorState
> {
  constructor(props: ProgressIndicatorProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const getColor = (percentage: number | undefined) => {
      if (!percentage) {
        return 'grey';
      } else if (percentage < 30) {
        return 'red';
      } else if (percentage < 70) {
        return 'orange';
      } else {
        return 'green';
      }
    };
    return (
      <View
        style={{
          width: 5,
          height: 50,
          backgroundColor: getColor(this.props.percentage),
        }}
      />
    );
  }
}
