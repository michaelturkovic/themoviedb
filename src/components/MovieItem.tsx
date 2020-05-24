import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from 'src/reducers';
import { POSTER_PATH } from 'src/contstants';
import { getYear } from 'src/utils';

type MovieItemProps = {
  movie: IMovie;
};

export const MovieItem: FC<MovieItemProps> = ({ movie }): JSX.Element => (
  <Link to={`/movie/${movie.id}`} className='movie-item__link'>
    <div className='movie-item'>
      <div className='movie-item__poster'>
        {movie.poster_path !== null ? (
          <img src={`${POSTER_PATH}/${movie.poster_path}`} className='item__image' />
        ) : (
          <div className='item__noimage'>
            <h5>No image</h5>
          </div>
        )}
      </div>
      <div className='movie-item__info'>
        <h5 className='info__title'>
          {movie.title} ({getYear(movie.release_date)})
        </h5>
        <p className='info__language'>Language: {movie.original_language}</p>
      </div>
      <div className='movie-item__rating'>
        <p className='rating__value'>
          {movie.vote_average != 0 ? movie.vote_average : 'N/A'}
        </p>
      </div>
    </div>
  </Link>
);
