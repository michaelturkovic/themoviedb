import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from 'src/store';
import { MoviesState } from 'src/reducers';
import { useCallback } from 'react';
import {
  getMovies as getMoviesAction,
  clearMovies as clearMoviesAction,
  getMovieDetails as getMovieDetailsAction,
  clearMovieDetails as clearMovieDetailsAction,
  rateMovie as rateMovieAction,
  getRatedMovies as getRatedMoviesAction,
  getGenres as getGenresAction,
  getRandomMovie as getRandomMovieAction,
} from 'src/actions';

export const useMoviesStore = () => {
  const dispatch = useDispatch();

  const {
    loading,
    movies,
    errorMessage,
    movieDetails,
    ratedMovies,
    genres,
  } = useSelector<ApplicationState, MoviesState>((state: ApplicationState) => ({
    loading: state.movies.loading,
    movies: state.movies.movies,
    errorMessage: state.movies.errorMessage,
    movieDetails: state.movies.movieDetails,
    ratedMovies: state.movies.ratedMovies,
    genres: state.movies.genres,
  }));

  const getMovies = useCallback(
    (query: string, page: number) => dispatch(getMoviesAction(query, page)),
    [dispatch]
  );

  const clearMovies = useCallback(() => dispatch(clearMoviesAction()), [
    dispatch,
  ]);

  const getMovieDetails = useCallback(
    (id: number) => dispatch(getMovieDetailsAction(id)),
    [dispatch]
  );

  const clearMovieDetails = useCallback(
    () => dispatch(clearMovieDetailsAction()),
    [dispatch]
  );

  const rateMovie = useCallback(
    (movieId: number, value: number, sessionId: string) =>
      dispatch(rateMovieAction(movieId, value, sessionId)),
    [dispatch]
  );

  const getRatedMovies = useCallback(
    (sessionId: string) => dispatch(getRatedMoviesAction(sessionId)),
    [dispatch]
  );

  const getGenres = useCallback(() => dispatch(getGenresAction()), [dispatch]);

  const getRandomMovie = useCallback(
    (genreId: number) => dispatch(getRandomMovieAction(genreId)),
    [dispatch]
  );

  return {
    loading,
    movies,
    errorMessage,
    movieDetails,
    genres,
    getMovies,
    clearMovies,
    getMovieDetails,
    clearMovieDetails,
    rateMovie,
    getRatedMovies,
    getGenres,
    getRandomMovie
  };
};
