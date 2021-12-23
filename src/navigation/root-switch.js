import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {rootSwitch} from 'movie_machine/src/config/navigator';
import MainStack from './main-stack';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={rootSwitch.main} component={MainStack} />
    </Stack.Navigator>
  );
}

export default RootStack;
