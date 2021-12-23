import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {mainStack} from 'movie_machine/src/config/navigator';
import HomeTabs from './home-tabs';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName={mainStack.home_tab}
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.home_tab}
        component={HomeTabs}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
