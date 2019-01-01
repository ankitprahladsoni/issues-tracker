import React from 'react';
import { Text, View } from 'react-native';

import { createMaterialTopTabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

export default class RepositoryScreen extends React.Component {
  render() {
    return <TabNavigator />;
  }
}
