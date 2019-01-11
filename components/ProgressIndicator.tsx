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

  getColor = (percentage: number) => {
    const percColors = [
      { color: 'grey', perc: -1 },
      { color: 'red', perc: 30 },
      { color: 'orange', perc: 70 },
      { color: 'green', perc: 100 },
    ];

    return percColors.find(x => percentage <= x.perc)!.color;
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: this.getColor(this.props.percentage),
          height: 50,
          width: 5,
        }}
      />
    );
  }
}
