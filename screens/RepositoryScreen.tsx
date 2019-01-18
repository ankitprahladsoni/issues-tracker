import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import BugsScreen from './BugsScreen';
import MilestonesScreen from './MilestonesScreen';
import StoriesScreen from './StoriesScreen';
import { View } from 'react-native';
import OpenClose from 'components/OpenClose';
import Filters from 'components/Filters';
import AddButton from 'components/AddButton';

export const TabNavigator = createAppContainer(
  createBottomTabNavigator({
    Milestone: MilestonesScreen,
    Stories: StoriesScreen,
    Bugs: BugsScreen,
  })
);

export default class RepositoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Repository!!!',
  };
  state = { shouldShowOpen: true, milestones: [] };

  showOpen = () => this.setState({ shouldShowOpen: true });
  showClosed = () => this.setState({ shouldShowOpen: false });

  componentDidMount() {
    this.setState({
      milestones: [
        {
          name: 'test Open',
          dueDate: '01/01/2020',
          tasks: [{ closed: true }, { closed: false }],
          closed: false,
        },
        {
          name: 'test Closed',
          dueDate: '01/01/2020',
          tasks: [{ closed: true }, { closed: false }],
          closed: true,
        },
      ],
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <OpenClose showOpen={this.showOpen} showClosed={this.showClosed} />
        <Filters />
        <AddButton />
        <TabNavigator
          screenProps={{
            shouldShowOpen: this.state.shouldShowOpen,
            milestones: this.state.milestones,
          }}
        />
      </View>
    );
  }
}
