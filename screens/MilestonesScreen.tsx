import Milestone from 'components/Milestone';
import MilestoneModal from 'components/MilestoneModal';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

export default class MilestonesScreen extends React.Component<
  NavigationScreenProps
> {
  navigateTo = () => this.props.navigation.navigate('Task', { name: 'Task 1' });

  render() {
    const milestones: MilestoneModal[] = this.props.screenProps!.milestones;

    const milestoneComponents = milestones
      .filter(m => m.closed !== this.props.screenProps!.shouldShowOpen)
      .map((m, index) => (
        <TouchableOpacity
          onPress={this.navigateTo}
          testID={`milestone${index}`}
        >
          <Milestone {...m} />
        </TouchableOpacity>
      ));

    return <View>{milestoneComponents}</View>;
  }
}
