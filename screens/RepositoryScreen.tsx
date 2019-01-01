import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { MilestoneScreen } from './MilestoneScreen';
import { StoriesScreen } from './StoriesScreen';
import { BugsScreen } from './BugsScreen';

const TabNavigator = createMaterialTopTabNavigator({
  Milestone: MilestoneScreen,
  Stories: StoriesScreen,
  Bugs: BugsScreen,
});

export default class RepositoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Repository!!!',
  };
  render() {
    return <TabNavigator />;
  }
}
