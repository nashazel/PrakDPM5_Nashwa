// File: App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, Button, Card, Text, Appbar } from 'react-native-paper';
import { View, FlatList, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const tasks = [
  { id: '1', title: 'Belajar React Navigation', description: 'Pelajari dasar-dasar navigasi di React Native.' },
  { id: '2', title: 'Membuat UI dengan RN Paper', description: 'Implementasi komponen desain menggunakan React Native Paper.' },
  { id: '3', title: 'Integrasi API', description: 'Pelajari cara memanggil API di React Native.' },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card} onPress={() => navigation.navigate('Detail', { task: item })}>
            <Card.Title
              title={item.title}
              subtitle={item.description}
              titleStyle={styles.cardTitle}
              subtitleStyle={styles.cardSubtitle}
              style={styles.cardContent}
            />
          </Card>
        )}
      />
    </View>
  );
}

function DetailScreen({ route }) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title={task.title} titleStyle={styles.detailTitle} />
        <Card.Content>
          <Text style={styles.detailDescription}>{task.description}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" buttonColor="#6200ee" textColor="#fff" onPress={() => alert('Tugas selesai!')}>
            Selesaikan
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

function CustomAppBar({ navigation, previous, title }) {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} style={styles.appBarTitle} />
    </Appbar.Header>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ navigation, route }) => ({
            header: ({ navigation, route, options, back }) => (
              <CustomAppBar
                navigation={navigation}
                previous={back}
                title={options.title}
              />
            ),
          })}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Daftar Tugas' }} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail Tugas' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
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
    backgroundColor: '#bbdefb',
  },
  cardTitle: {
    color: '#0d47a1',
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: '#1565c0',
  },
  cardContent: {
    padding: 8,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ee',
  },
  detailDescription: {
    fontSize: 16,
    color: '#424242',
    marginTop: 8,
  },
  appBarTitle: {
    textAlign: 'center',
  },
});
