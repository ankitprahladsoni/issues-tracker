import AddButton from 'components/AddButton';
import Filters from 'components/Filters';
import OpenClose from 'components/OpenClose';
import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import MilestonesScreen from './milestones/MilestonesScreen';
import IssuesScreen from './IssuesScreen';
import { createMilestoneProps } from './milestones/MilestoneTestUtil';
import Status from './Status';

export const TabNavigator = createAppContainer(
  createBottomTabNavigator({
    Milestone: MilestonesScreen,
    Stories: IssuesScreen,
  })
);

export default class ProjectScreen extends React.Component {
  static navigationOptions = {
    title: 'Repository!!!',
  };
  state = { shouldShowOpen: true, milestones: [] };

  showOpen = () => this.setState({ shouldShowOpen: true });
  showClosed = () => this.setState({ shouldShowOpen: false });

  componentDidMount() {
    this.setState({
      milestones: [
        createMilestoneProps({}),
        createMilestoneProps({status:Status.Closed}),
      ],
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <OpenClose showOpen={this.showOpen} showClosed={this.showClosed} />
        <Filters type="milestone" />
        <AddButton type="milestone" />
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
