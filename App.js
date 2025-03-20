import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { SafeAreaView } from "react-native";
import AppNavigator from './Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  return (
    
    <AppNavigator />
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
