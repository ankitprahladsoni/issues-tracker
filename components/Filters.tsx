import React from 'react';
import { Button, View, Modal, Text, TouchableHighlight } from 'react-native';

export interface IFiltersProps {
  type: string;
}

export default class Filters extends React.Component<IFiltersProps> {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible: boolean) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View>
            <Text>filters</Text>
            <TouchableHighlight
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <Button
          testID="filters-button"
          title="Filters"
          onPress={() => {
            this.setModalVisible(true);
          }}
        />
      </View>
    );
  }
}
