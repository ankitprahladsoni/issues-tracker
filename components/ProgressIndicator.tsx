import * as React from 'react';
import { View } from 'react-native';

export interface IProgressIndicatorProps {
  percentage?: number;
}

export default class ProgressIndicator extends React.Component<
  IProgressIndicatorProps
> {
  constructor(props: IProgressIndicatorProps) {
    super(props);
    this.state = {};
  }

  render() {
    const getColor = (percentage: number | undefined) => {
      if (!percentage) {
        return 'grey';
      }
      if (percentage < 30) {
        return 'red';
      }
      if (percentage < 70) {
        return 'orange';
      }
      return 'green';
    };
    return (
      <View
        style={{
          backgroundColor: getColor(this.props.percentage),
          height: 50,
          width: 5,
        }}
      />
    );
  }
}
