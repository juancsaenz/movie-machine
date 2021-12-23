import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {homeTabs} from 'movie_machine/src/config/navigator';
import {HomeScreen} from 'movie_machine/src/screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={homeTabs.home} component={HomeScreen} />
    </Tab.Navigator>
  );
}
