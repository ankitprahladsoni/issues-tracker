import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ProjectScreen from '../project/ProjectScreen';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
export default createStackNavigator(
  {
    Home: ProjectScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
