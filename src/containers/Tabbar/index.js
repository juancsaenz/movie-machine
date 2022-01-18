/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {homeTabs} from 'movie_machine/src/config/navigator';

import styles from './styles';

const Tabbar = props => {
  const {navigation, state} = props;
  const insets = useSafeAreaInsets();
  let inset = insets.bottom;

  const data = [
    {
      iconName: 'home',
      name: 'Home',
      router: homeTabs.home,
    },
    {
      iconName: 'heart',
      name: 'Favorites',
      router: homeTabs.favorites,
    },
    {
      iconName: 'user',
      name: 'Profile',
      router: homeTabs.profile,
    },
  ];

  const visit = state.index;

  return (
    <View style={[styles.container, {paddingBottom: inset > 20 ? 20 : inset}]}>
      {data.map((tab, index) => (
        <Pressable
          key={index}
          style={styles.item}
          onPress={() => navigation.navigate(tab.router)}>
          <Icon
            name={tab.iconName}
            size={30}
            color={visit === index ? '#121212' : '#777777'}
          />
          <Text
            style={[
              styles.text,
              {color: visit === index ? '#121212' : '#777777'},
            ]}>
            {tab.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Tabbar;
