import React, {memo} from 'react';
import {View} from 'react-native';

import ContentDetails from 'movie_machine/src/containers/ContentDetails';
import styles from './styles';

export const DetailsScreen = ({route}) => {
  const {contentId} = route.params || {};
  return (
    <View style={styles.view}>
      <ContentDetails contentId={contentId} />
    </View>
  );
};

export default memo(DetailsScreen);
