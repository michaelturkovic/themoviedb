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

  const { movie } = queryString.parse(search);

  useEffect((): any => {
    if (movie && typeof movie === 'string') {
      searchMovies(movie);
    }

    return () => clearSearchResults();
  }, [search]);

  return (
    <div className='search__wrapper'>
      {!loading ? (
        <>
          {searchResults.length > 0 ? (
            <>
              <h4 className='search__header'>SEARCH TERM: {movie}</h4>
              <div className='search__container'>
                {searchResults.map((movie, index) => (
                  <MovieItem key={index} movie={movie} />
                ))}
              </div>
            </>
          ) : (
            <h3 className='search__noresults'>No results</h3>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};
