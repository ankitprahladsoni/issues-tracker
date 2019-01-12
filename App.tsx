import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
const Container = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <Container />;
  }
}
