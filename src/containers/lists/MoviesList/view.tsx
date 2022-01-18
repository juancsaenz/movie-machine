import React, {useEffect, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, Text} from 'react-native';
import MovieItem from 'movie_machine/src/components/movieItem';
import styles from './styles';

export const updateContents = (values, setMovies) => {
  const {movies, results} = values;
  const com = movies.concat(results);
  setMovies(com);
};

export const handleLoadMore = (values, setPage) => {
  const {loading, movies, totalItems, page} = values;
  if (!loading && movies.length < totalItems) {
    const newPage = page + 1;
    setPage(newPage);
  }
};

function MoviesList({moviesActions, type: tabType}) {
  const {getMovies, getSeries} = moviesActions;
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const handleMoviesChange = useCallback(
    (type, response) => {
      if (type !== 'error' && movies.length < response.total_results) {
        const values = {movies, results: response.results};
        updateContents(values, setMovies);
        setTotalItems(response.total_results);
      }
    },
    [page],
  );

  useEffect(() => {
    if (tabType === 'movies') {
      getMovies(page, handleMoviesChange);
    } else if (tabType === 'series') {
      getSeries(page, handleMoviesChange);
    }
    getMovies(page, handleMoviesChange);
  }, [page, handleMoviesChange]);

  if (movies.length === 0) {
    return null;
  }

  const values = {movies, totalItems, page};

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        numColumns={3}
        extraData={movies}
        renderItem={({item}) => <MovieItem item={item} />}
        showsVerticalScrollIndicator={false}
        onEndReached={() => handleLoadMore(values, setPage)}
        onEndReachedThreshold={0.4}
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
