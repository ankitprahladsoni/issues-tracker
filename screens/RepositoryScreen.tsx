import React from 'react';
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
import BugsScreen from './BugsScreen';
import MilestoneScreen from './MilestoneScreen';
import StoriesScreen from './StoriesScreen';

const TabNavigator = createAppContainer(
  createMaterialTopTabNavigator({
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
