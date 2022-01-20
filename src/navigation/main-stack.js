import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {mainStack} from 'movie_machine/src/config/navigator';
import HomeTabs from './home-tabs';
import {DetailsScreen} from 'movie_machine/src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

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
      <Stack.Screen name={mainStack.details} component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
