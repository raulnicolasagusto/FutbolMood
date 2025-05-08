// screens/ChallengeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ChallengeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla: Desafío del Día</Text>
      <Button title="Ir a Mood" onPress={() => navigation.navigate('Mood')} />
      <Button title="Ir a Ranking" onPress={() => navigation.navigate('Ranking')} />
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

export default ChallengeScreen;