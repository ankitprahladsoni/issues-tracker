import React from 'react';
import { Button, Modal, Text, TouchableHighlight, View } from 'react-native';

export interface FiltersProps {
  type: string;
}

export default class Filters extends React.Component<FiltersProps> {
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
          onRequestClose={() => {}}
        >
          <View>
            <Text>filters</Text>
            <TouchableHighlight
              testID="close"
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <Button
          testID="filters-button"
          title="Filters"
          onPress={() => this.setModalVisible(true)}
        />
      </View>
    );
  }
}
