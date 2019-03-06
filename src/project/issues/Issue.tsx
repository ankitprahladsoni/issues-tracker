import React from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Textarea,
  CheckBox,
  Body,
  Text,
  Picker,
  Icon,
  Button,
} from 'native-base';

export default () => {
  return (
    <Container>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input />
          </Item>
          <Textarea rowSpan={5} placeholder="Description" />
          <Item>
            <CheckBox checked={true} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </Item>
          <Item floatingLabel>
            <Label>Assigned To</Label>
            <Input />
          </Item>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Status"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
            >
              <Picker.Item label="Open" value="key0" />
              <Picker.Item label="Closed" value="key1" />
              <Picker.Item label="In Progress" value="key2" />
            </Picker>
          </Item>
          <Item floatingLabel>
            <Label>Milestone</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Labels</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Due By</Label>
            <Input />
          </Item>
        </Form>
        <Button light>
          <Text> Add </Text>
        </Button>
      </Content>
    </Container>
  );
};
