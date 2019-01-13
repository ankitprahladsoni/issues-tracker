import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import BugsScreen from './BugsScreen';
import MilestoneScreen from './MilestonesScreen';
import StoriesScreen from './StoriesScreen';

const TabNavigator = createAppContainer(
  createBottomTabNavigator({
    Milestone: MilestoneScreen,
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
