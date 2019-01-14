import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import BugsScreen from './BugsScreen';
import MilestonesScreen from './MilestonesScreen';
import StoriesScreen from './StoriesScreen';
import { View } from 'react-native';
import OpenClose from 'components/OpenClose';
import Filters from 'components/Filters';
import AddButton from 'components/AddButton';

const TabNavigator = createAppContainer(
  createBottomTabNavigator({
    Milestone: MilestonesScreen,
    Stories: StoriesScreen,
    Bugs: BugsScreen,
  })
);

export default class RepositoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Repository!!!',
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <OpenClose />
        <Filters />
        <AddButton />
        <TabNavigator />
      </View>
    );
  }
}
