import React, { FC, useState } from 'react';
import { IMovieDetails } from 'src/reducers';
import { getYear, convertTime } from 'src/utils';
import { POSTER_PATH } from 'src/contstants';
import { StarRating } from './StarRating';

type MovieDetailsProps = {
  movie: IMovieDetails;
  rateMovie: (rating: number) => void;
};

export const MovieDetails: FC<MovieDetailsProps> = ({
  movie,
  rateMovie,
}): JSX.Element => {
  const [rating, setRating] = useState<number>(movie.rating || 0);
  return (
    <div className='movie__content'>
      <h3 className='content__title'>
        {movie.title} ({getYear(movie.release_date)})
      </h3>
      <p className='content__tagline'>{movie.tagline}</p>
      <div className='movie__info'>
        <div className='info__poster'>
          {movie.poster_path !== null ? (
            <img
              src={`${POSTER_PATH}/${movie.poster_path}`}
              className='poster__image'
            />
          ) : (
            <div className='poster__noimage'>
              <h4>No image</h4>
            </div>
          )}
        </div>
        <div className='info__content'>
          <div className='content__details'>
            <p className='details__title'>Duration:</p>
            <p className='details__description'>{convertTime(movie.runtime)}</p>
          </div>
          <div className='content__details'>
            <p className='details__title'>Rating:</p>
            <p className='details__description'>{movie.vote_average}</p>
          </div>
          <div className='content__details'>
            <p className='details__title'>Popularity:</p>
            <p className='details__description'>{movie.popularity}</p>
          </div>
          <div className='content__details'>
            <p className='details__title'>Language:</p>
            <p className='details__description'>{movie.original_language}</p>
          </div>
          <div className='content__details'>
            <p className='details__title'>Genres:</p>
            {movie.genres.map((genre, index) => (
              <p className='details__description' key={genre.id}>
                {genre.name}
                {index !== movie.genres.length - 1 ? ',' : ''}
              </p>
            ))}
          </div>
          <div className='content__details'>
            <p className='details__title'>Production companies:</p>
            {movie.production_companies.map((company, index) => (
              <p className='details__description' key={company.id}>
                {company.name}
                {index !== movie.production_companies.length - 1 ? ',' : ''}
              </p>
            ))}
          </div>
          <div className='content__details'>
            <p className='details__title'>Spoken languages:</p>
            {movie.spoken_languages.map((language, index) => (
              <p className='details__description' key={index}>
                {language.name}
                {index !== movie.spoken_languages.length - 1 ? ',' : ''}
              </p>
            ))}
          </div>
          <>
            <p className='details__title'>Overview:</p>
            <p className='details__description'>{movie.overview}</p>
          </>
          <div className='movie__rating'>
            <StarRating
              rating={rating}
              numberOfStars={10}
              onChangeRating={(rating) => {
                setRating(rating);
                rateMovie(rating);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
