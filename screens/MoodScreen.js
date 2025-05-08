// screens/MoodScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MoodScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla: Mood del Día</Text>
      <Button title="Ir a Historial" onPress={() => navigation.navigate('History')} />
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

export default MoodScreen;
