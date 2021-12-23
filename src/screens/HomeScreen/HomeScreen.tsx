import React, {memo} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <Text>Home</Text>
    </View>
  );
};

export default memo(HomeScreen);
