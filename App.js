import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Register from './components/Register';
import LoginPage from './components/LoginPage';
import CreatePost from './components/CreatePost'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <LoginPage/>
  );
}


