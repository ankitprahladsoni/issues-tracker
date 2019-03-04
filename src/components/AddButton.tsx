import React from 'react';
import { Button, Modal, Text, TouchableHighlight, View } from 'react-native';

export interface AddButtonProps {
  type: string;
}

export default class AddButton extends React.Component<AddButtonProps> {
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
            <Text>Add stuff here</Text>
            <TouchableHighlight
              testID="close"
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <Button
          testID="add-button"
          title="Add"
          onPress={() => this.setModalVisible(true)}
        />
      </View>
    );
  }
}
