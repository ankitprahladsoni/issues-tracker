import * as React from 'react';
import { View } from 'react-native';

export interface IProgressIndicatorProps {
  percentage: number;
}

export default class ProgressIndicator extends React.Component<
  IProgressIndicatorProps
> {
  constructor(props: IProgressIndicatorProps) {
    super(props);
    this.state = {};
  }

  render() {
    const getColor = (percentage: number) => {
      const percColors = [
        { color: 'grey', perc: -1 },
        { color: 'red', perc: 30 },
        { color: 'orange', perc: 70 },
        { color: 'green', perc: 100 },
      ];

      return percColors.find(x => percentage <= x.perc)!.color;
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
