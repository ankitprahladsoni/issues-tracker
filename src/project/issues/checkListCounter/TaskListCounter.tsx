import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import Task from '../Task';

interface TaskListCounterProps {
  tasks: Task[];
}

export default ({ tasks }: TaskListCounterProps) => {
    if (tasks.length === 0) {
    return null;
    }

    const checked = tasks.filter(t => t.checked).length;
    const counterText = `${checked}/${tasks.length} tasks completed`;
    return (
      <View style={styles.view}>
      <Octicons name="tasklist" style={styles.icon} />
        <Text testID="counterText">{counterText}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  view: { flexDirection: 'row', alignItems: 'center' },
  icon: { paddingRight: 5 },
});
