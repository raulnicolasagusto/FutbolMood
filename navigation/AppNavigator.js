// navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa tus pantallas
import WelcomeScreen from '../screens/WelcomeScreen';
import ChallengeScreen from '../screens/ChallengeScreen';
import MoodScreen from '../screens/MoodScreen';
import HistoryScreen from '../screens/HistoryScreen';
import RankingScreen from '../screens/RankingScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* La primera pantalla que se mostrará será WelcomeScreen */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Bienvenida' }}
        />
        <Stack.Screen
          name="Challenge"
          component={ChallengeScreen}
          options={{ title: 'Desafío del Día' }}
        />
        <Stack.Screen
          name="Mood"
          component={MoodScreen}
          options={{ title: 'Tu Mood Futbolero' }}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{ title: 'Historial' }}
        />
        <Stack.Screen
          name="Ranking"
          component={RankingScreen}
          options={{ title: 'Ranking de Cracks' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Tu Perfil' }}
        />
        {/* Puedes agregar más pantallas aquí a medida que las desarrolles */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;