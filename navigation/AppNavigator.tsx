import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import RepositoryScreen from '../screens/RepositoryScreen';

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
    Details: DetailsScreen,
    Home: RepositoryScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
