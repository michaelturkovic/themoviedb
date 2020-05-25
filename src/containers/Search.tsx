import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useMoviesStore } from 'src/hooks';
import { MovieItem, Loading } from 'src/components';

export const Search: FC = (): JSX.Element => {
  const { search } = useLocation();
  const {
    searchResults,
    searchMovies,
    loading,
    clearSearchResults,
  } = useMoviesStore();

  useEffect((): any => {
    const { movie } = queryString.parse(search);
    if (movie && typeof movie === 'string') {
      searchMovies(movie);
    }

    return () => clearSearchResults();
  }, [search]);

  return (
    <div className='search__wrapper'>
      {!loading ? (
        <div className='search__container'>
          {searchResults.map((movie, index) => (
            <MovieItem key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
