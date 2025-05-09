// screens/WelcomeScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [club, setClub] = useState('');

  const handleContinue = () => {
    if (!name || !club) {
      alert('Por favor, completa ambos campos');
      return;
    }

    // Navegar a la pantalla de desafío pasando los datos
    navigation.navigate('Challenge', { name, club });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a FutbolMood!</Text>

      <Text style={styles.label}>Ingresa tu nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Tu nombre"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Escribe tu club favorito1:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: Boca, Barcelona, Real Madrid..."
        value={club}
        onChangeText={setClub}
      />

      <Button title="Comenzar" onPress={handleContinue} color="#2A9D8F" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F1FAEE',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#1D3557',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#1D3557',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});

export default WelcomeScreen;