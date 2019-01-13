import AddButton from 'components/AddButton';
import Filters from 'components/Filters';
import Milestone from 'components/Milestone';
import OpenClose from 'components/OpenClose';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

export default class MilestonesScreen extends React.Component<
  NavigationScreenProps
> {
  navigateTo = () => this.props.navigation.navigate('Task', { name: 'Task 1' });

  render() {
    return (
      <View>
        <View>
          <OpenClose />
          <Filters />
          <AddButton />
        </View>
        <TouchableOpacity onPress={this.navigateTo} testID="milestone">
          <Milestone
            name="test"
            dueDate="01/01/2020"
            tasks={[{ closed: true }, { closed: false }]}
            closed={false}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
