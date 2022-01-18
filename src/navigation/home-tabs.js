import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {homeTabs} from 'movie_machine/src/config/navigator';
import {HomeScreen} from 'movie_machine/src/screens/HomeScreen';
import {FavoritesScreen} from 'movie_machine/src/screens/FavoritesScreen';
import {ProfileScreen} from 'movie_machine/src/screens/ProfileScreen';
import Tabbar from 'movie_machine/src/containers/Tabbar';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator tabBar={props => <Tabbar {...props} />}>
      <Tab.Screen
        name={homeTabs.home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name={homeTabs.favorites} component={FavoritesScreen} />
      <Tab.Screen name={homeTabs.profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
