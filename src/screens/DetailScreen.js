// File: src/screens/DetailScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';

export default function DetailScreen({ route }) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title={task.title} />
        <Card.Content>
          <Text>{task.description}</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => alert('Tugas selesai!')}>Selesaikan</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
});
