import Milestone from 'components/Milestone';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

export default class MilestoneScreen extends React.Component<
  NavigationScreenProps
> {
  navigateTo = () => this.props.navigation.navigate('Task', { name: 'Task 1' });

  render() {
    return (
      <TouchableOpacity onPress={this.navigateTo}>
        <Milestone
          name="test"
          dueDate="01/01/2020"
          tasks={[{ closed: true }, { closed: false }]}
          closed={false}
        />
      </TouchableOpacity>
    );
  }
}
