import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {rootSwitch} from 'movie_machine/src/config/navigator';
import MainStack from './main-stack';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text testID="stepOne">Step One</Text>
    </View>
  );
}

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={rootSwitch.main} component={MainStack} />
    </Stack.Navigator>
  );
}

export default RootStack;
