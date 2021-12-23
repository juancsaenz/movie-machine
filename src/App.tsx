import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './navigation/root-switch';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
