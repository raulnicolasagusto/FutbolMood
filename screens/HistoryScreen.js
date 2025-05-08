// screens/MoodScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HistoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla: Historial</Text>
      <Button title="Ir a Mood" onPress={() => navigation.navigate('Mood')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default HistoryScreen;
