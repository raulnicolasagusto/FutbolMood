// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a FutbolMood!</Text>
      <Text style={styles.label}>Ingresa tu nombre:</Text>
      {/* Aquí iría un TextInput para el nombre */}
      <Text style={styles.label}>Selecciona tu club favorito:</Text>
      {/* Aquí iría un Picker o similar para el club */}
      <Button
        title="Comenzar"
        onPress={() => navigation.navigate('Challenge')} // Navegará a la pantalla de Desafío
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
  },
});

export default WelcomeScreen;