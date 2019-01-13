import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import BugsScreen from './BugsScreen';
import MilestonesScreen from './MilestonesScreen';
import StoriesScreen from './StoriesScreen';

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
    return <TabNavigator />;
  }
}
