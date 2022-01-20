import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export function ContentDetailInfo({data}) {
  return (
    <View style={styles.view}>
      <View style={styles.scores}>
        <View style={styles.centerContainer}>
          <Icon name="star" size={24} style={styles.rantingIcon} />
          <Text style={styles.ratingValue}>
            {data.vote_average}
            <Text style={styles.ratingStatic}> / 10</Text>
          </Text>
          <Text style={styles.explainer}>{data.vote_count}</Text>
        </View>
        <View style={styles.centerContainer}>
          <Icon name="star" size={24} style={styles.rateIcon} />
          <Text style={styles.explainer}>Rate this</Text>
        </View>
        <View style={styles.centerContainer}>
          <Icon name="heart" size={24} style={{color: 'red'}} />
          <Text style={styles.explainer}>Save this</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <Text style={styles.description}>{data.overview}</Text>
      <View style={styles.separator} />
    </View>
  );
}
export default ContentDetailInfo;
