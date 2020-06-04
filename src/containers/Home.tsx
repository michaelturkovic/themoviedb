import React, { FC, useState, useEffect } from 'react';
import { useMoviesStore } from 'src/hooks';
import { Button, MovieItem, Loading } from 'src/components';

export const Home: FC = (): JSX.Element => {
  const [timeWindow, setTimeWindow] = useState<string>('day');
  const timeWindowOptions = ['day', 'week'];
  const {
    trendingMovies,
    getTrendingMovies,
    clearTrendingMovies,
    loading,
  } = useMoviesStore();

  useEffect((): any => {
    getTrendingMovies(timeWindow);

    return () => clearTrendingMovies();
  }, [timeWindow]);

  return (
    <div className='trending__wrapper'>
      <div className='trending__options'>
        {timeWindowOptions.map((option, index) => (
          <Button
            key={index}
            classname={`option__button ${
              timeWindow === option ? 'option__button--active' : ''
            }`}
            label={option.toUpperCase()}
            onClick={() => setTimeWindow(option)}
          />
        ))}
      </div>

      {!loading ? (
        <div className='trending__list'>
          {trendingMovies.map((movie) => (
            <div className='list__item' key={movie.id}>
              <MovieItem movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
