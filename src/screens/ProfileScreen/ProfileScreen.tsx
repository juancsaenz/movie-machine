import React, {memo} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export const ProfileScreen = () => {
  return (
    <View style={styles.view}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default memo(ProfileScreen);
