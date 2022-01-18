import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './navigation/root-switch';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
