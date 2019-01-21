import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import Milestone, { IMilestoneProps } from 'src/project/milestones/Milestone';

export default class MilestonesScreen extends React.Component<
  NavigationScreenProps
> {
  navigateTo = () => this.props.navigation.navigate('Task', { name: 'Task 1' });

  render() {
    const milestones: IMilestoneProps[] = this.props.screenProps!.milestones;

    const milestoneComponents = milestones
      .filter(m => m.state === this.props.screenProps!.state)
      .map((m, index) => (
        <TouchableOpacity
          onPress={this.navigateTo}
          testID={`milestone${index}`}
          key={index}
        >
          <Milestone {...m} />
        </TouchableOpacity>
      ));

    return <View>{milestoneComponents}</View>;
  }
}
