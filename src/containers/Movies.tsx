import React, { FC, useState, useEffect } from 'react';
import { useMoviesStore } from 'src/hooks';
import { useParams } from 'react-router-dom';
import { MovieItem, Loading, Button } from 'src/components';

type MovieRouteParams = {
  name: string;
};

export const Movies: FC = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const {
    loading,
    movies,
    errorMessage,
    getMovies,
    clearMovies,
  } = useMoviesStore();
  const { name } = useParams<MovieRouteParams>();
  const query = name.replace('-', '_').toLocaleLowerCase();

  useEffect(() => {
    clearMovies();
    setPage(1);
    getMovies(query, 1);
  }, [name]);

  useEffect(() => {
    if (page != 1) getMovies(query, page);
  }, [page]);

  const onLoadMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPage(page + 1);
  };

  return (
    <div className='movies__wrapper'>
      <div className='movies__content'>
        {movies.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
      </div>
      {!loading ? (
        <Button
          classname='movies__loading-btn'
          label='Load More'
          onClick={(event) => onLoadMore(event)}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};
