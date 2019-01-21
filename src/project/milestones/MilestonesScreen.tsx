import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import Milestone, { IMilestoneProps } from './Milestone';

export default class MilestonesScreen extends React.Component<
  NavigationScreenProps
> {
  navigateTo = () => this.props.navigation.navigate('Issue', { name: 'Issue 1' });

  render() {
    const milestones: IMilestoneProps[] = this.props.screenProps!.milestones;

    const milestoneComponents = milestones
      .filter(m => m.status === this.props.screenProps!.status)
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
