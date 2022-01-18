import React from 'react';
import {View, Dimensions, Text, Pressable, Image} from 'react-native';
import styles from './styles';

const {width} = Dimensions.get('window');

export function MovieItem({item}) {
  const dimensionsStyle = {
    width: width / 3 - 20,
    height: width / 3 + 30 - 8,
    padding: 0,
  };

  return (
    <View style={styles.view}>
      <Pressable>
        <View style={styles.container}>
          <View style={dimensionsStyle}>
            <Image
              style={[styles.moviePic, dimensionsStyle]}
              source={{
                uri: `https://image.tmdb.org/t/p/w780${item.poster_path}`,
              }}
              resizeMode="cover"
            />
            <Text
              style={[styles.contentText, {width: dimensionsStyle.width}]}
              numberOfLines={2}>
              {item.title}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
export default MovieItem;
