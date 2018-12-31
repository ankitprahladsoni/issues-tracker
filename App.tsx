import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
