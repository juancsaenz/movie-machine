import React, {useEffect, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, Text} from 'react-native';

import styles from './styles';

function MoviesList({moviesActions, type: tabType}) {
  const {getMovies} = moviesActions;
  const [movies, setMovies] = useState([]);
  const handleMoviesChange = useCallback((type, response) => {
    console.log('response', response);
    if (type !== 'error') {
      setMovies(response.results);
    }
  }, []);

  useEffect(() => {
    getMovies(handleMoviesChange);
  }, []);

  if (movies.length === 0) {
    return null;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

/**
 * Component properties
 */
MoviesList.propTypes = {
  moviesActions: PropTypes.shape({
    getMovies: PropTypes.func.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default MoviesList;
