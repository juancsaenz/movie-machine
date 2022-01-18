import React, {useState, useCallback, memo} from 'react';
import {View, Text} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';

import MoviesList from 'movie_machine/src/containers/lists/MoviesList';
import styles from './styles';

export const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'movies', title: 'Movies'},
    {key: 'series', title: 'Series'},
  ]);
  const renderScene = ({route}) => <MoviesList />;
  const renderTabBar = useCallback(
    props => (
      <TabBar
        {...props}
        indicatorStyle={styles.indicatorStyle}
        style={styles.tabBar}
        renderLabel={({route: routeTabs, focused}) => (
          <Text
            style={[
              styles.tabLabel,
              focused ? styles.active : styles.inactive,
            ]}>
            {routeTabs.title}
          </Text>
        )}
      />
    ),
    [],
  );
  return (
    <View style={styles.view}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        lazy
      />
    </View>
  );
};

export default memo(HomeScreen);
