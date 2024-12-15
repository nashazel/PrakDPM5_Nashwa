// File: src/screens/HomeScreen.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const tasks = [
  { id: '1', title: 'Belajar React Navigation', description: 'Pelajari dasar-dasar navigasi di React Native.' },
  { id: '2', title: 'Membuat UI dengan RN Paper', description: 'Implementasi komponen desain menggunakan React Native Paper.' },
  { id: '3', title: 'Integrasi API', description: 'Pelajari cara memanggil API di React Native.' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card} onPress={() => navigation.navigate('Detail', { task: item })}>
            <Card.Title title={item.title} />
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginVertical: 8,
  },
});
