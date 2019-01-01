import React from 'react';
import { Text, View } from 'react-native';

import { createMaterialTopTabNavigator } from 'react-navigation';

class MilestoneScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class StoriesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class BugsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Bugs!</Text>
      </View>
    );
  }
}

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
