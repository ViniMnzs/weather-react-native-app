/* eslint-disable react/jsx-filename-extension */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Routes />
    </NavigationContainer>
  );
}
