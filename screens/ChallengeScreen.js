// screens/ChallengeScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import { searchGifs } from '../utils/giphyApi';

const ChallengeScreen = ({ route }) => {
  const { name, club } = route.params || {};
  const [gifUrl, setGifUrl] = useState('');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');

  // Función para cargar un nuevo desafío
  const loadChallenge = async () => {
    try {
      // Seleccionar un tema aleatorio para el desafío
      const themes = [
        'Cristiano Ronaldo goal',
        'Lionel Messi dribble',
        'Neymar Jr skill',
        'Kylian Mbappé speed',
        'soccer celebration',
        'football trick',
      ];
      const randomTheme = themes[Math.floor(Math.random() * themes.length)];

      // Buscar un GIF relacionado con el tema seleccionado
      const gifUrlResponse = await searchGifs(randomTheme);
      if (!gifUrlResponse) {
        console.error('No se pudo cargar el GIF.');
        return;
      }
      setGifUrl(gifUrlResponse);

      // Configurar pregunta y opciones basadas en el tema
      const challengeData = getChallengeData(randomTheme);
      setQuestion(challengeData.question);
      setOptions(challengeData.options);
      setCorrectAnswer(challengeData.correctAnswer);
    } catch (error) {
      console.error('Error al cargar el desafío:', error);
    }
  };

  // Cargar el primer desafío cuando se monta la pantalla
  useEffect(() => {
    loadChallenge();
  }, []);

  // Manejar la respuesta del usuario
  const handleAnswer = (selectedOption) => {
    if (selectedOption === correctAnswer) {
      Alert.alert('¡Correcto!', '¡Respuesta correcta!', [
        { text: 'OK', onPress: loadChallenge }, // Cargar un nuevo desafío
      ]);
    } else {
      Alert.alert('Incorrecto', `La respuesta correcta era: ${correctAnswer}`, [
        { text: 'OK', onPress: loadChallenge }, // Cargar un nuevo desafío
      ]);
    }
  };

  // Obtener datos del desafío basados en el tema
  const getChallengeData = (theme) => {
    const challenges = {
      'Cristiano Ronaldo goal': {
        question: '¿Qué jugador anotó este gol?',
        options: ['Cristiano Ronaldo', 'Lionel Messi', 'Neymar Jr.', 'Kylian Mbappé'],
        correctAnswer: 'Cristiano Ronaldo',
      },
      'Lionel Messi dribble': {
        question: '¿Qué jugador realizó esta jugada?',
        options: ['Lionel Messi', 'Cristiano Ronaldo', 'Neymar Jr.', 'Kylian Mbappé'],
        correctAnswer: 'Lionel Messi',
      },
      'Neymar Jr skill': {
        question: '¿Qué jugador realizó esta habilidad?',
        options: ['Neymar Jr.', 'Cristiano Ronaldo', 'Lionel Messi', 'Kylian Mbappé'],
        correctAnswer: 'Neymar Jr.',
      },
      'Kylian Mbappé speed': {
        question: '¿Qué jugador mostró esta velocidad?',
        options: ['Kylian Mbappé', 'Cristiano Ronaldo', 'Lionel Messi', 'Neymar Jr.'],
        correctAnswer: 'Kylian Mbappé',
      },
      'soccer celebration': {
        question: '¿Qué equipo está celebrando?',
        options: ['Barcelona', 'Real Madrid', 'Manchester United', 'Paris Saint-Germain'],
        correctAnswer: 'Paris Saint-Germain',
      },
      'football trick': {
        question: '¿Qué tipo de jugada es esta?',
        options: ['Truco de taco', 'Bicicleta', 'Tiro libre', 'Pase largo'],
        correctAnswer: 'Truco de taco',
      },
    };

    return challenges[theme];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Desafío del Día</Text>
      <Text style={styles.text}>¡Hola {name}!</Text>
      <Text style={styles.text}>Fanático de {club}</Text>

      {/* Mostrar GIF */}
      {gifUrl ? (
        <Image source={{ uri: gifUrl }} style={styles.gif} />
      ) : (
        <Text>Cargando GIF...</Text>
      )}

      {/* Mostrar pregunta */}
      <Text style={styles.question}>{question}</Text>

      {/* Mostrar opciones */}
      {options.map((option, index) => (
        <Button
          key={index}
          title={option}
          onPress={() => handleAnswer(option)}
          color="#2A9D8F"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F1FAEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1D3557',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#457B9D',
  },
  gif: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#E63946',
  },
});

export default ChallengeScreen;