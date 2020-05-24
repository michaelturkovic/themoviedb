import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMoviesStore } from 'src/hooks';
import { MovieDetails, Loading } from 'src/components';

type MovieRouteParams = {
  id: string;
};

export const Movie: FC = (): JSX.Element => {
  const { id } = useParams<MovieRouteParams>();
  const { loading, movieDetails, getMovieDetails, clearMovieDetails } = useMoviesStore();

  useEffect((): any => {
    getMovieDetails(Number(id));
    return () => clearMovieDetails();
  }, []);

  return (
    <div className='movie__wrapper'>
      {!loading ? (
        <>
          {movieDetails != null ? (
            <MovieDetails
              movie={movieDetails}
              rateMovie={(rating) => console.log(rating)}
            />
          ) : null}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};
