import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export function DetailHeader({data}) {
  return (
    <View style={styles.content}>
      <Image
        style={styles.moviePic}
        source={{
          uri: `https://image.tmdb.org/t/p/w780${data.backdrop_path}`,
        }}
        resizeMode="cover"
      />
      <LinearGradient
        colors={[
          'rgba(255,255,255,0)',
          'rgba(255,255,255,0.9)',
          'rgba(255,255,255,1)',
        ]}
        style={[styles.bottomOverlay]}
      />
      <View style={styles.contentView}>
        <View style={styles.card}>
          <Image
            style={styles.contentPic}
            source={{
              uri: `https://image.tmdb.org/t/p/w780${data.poster_path}`,
            }}
            resizeMode="cover"
          />
        </View>
        <View>
          <Text style={styles.contentTitle}>{data.original_title}</Text>
          <Text style={styles.contentDescription}>
            {data.release_date || 0}
          </Text>
        </View>
      </View>
    </View>
  );
}
export default DetailHeader;
