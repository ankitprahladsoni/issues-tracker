import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/navigation/AppNavigator';
import { Font } from 'expo';

const Container = createAppContainer(AppNavigator);

export default class App extends React.Component {
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  render() {
    return <Container />;
  }
}
