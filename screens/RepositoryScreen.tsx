import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import BugsScreen from './BugsScreen';
import MilestoneScreen from './MilestoneScreen';
import StoriesScreen from './StoriesScreen';

const TabNavigator = createMaterialTopTabNavigator({
  Bugs: BugsScreen,
  Milestone: MilestoneScreen,
  Stories: StoriesScreen,
});

export default class RepositoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Repository!!!',
  };
  render() {
    return <TabNavigator />;
  }
}
