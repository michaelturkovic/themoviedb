import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from 'src/store';
import { MoviesState } from 'src/reducers';
import { useCallback } from 'react';
import {
  getMovies as getMoviesAction,
  clearMovies as clearMoviesAction,
  getMovieDetails as getMovieDetailsAction,
  clearMovieDetails as clearMovieDetailsAction
} from 'src/actions';

export const useMoviesStore = () => {
  const dispatch = useDispatch();

  const { loading, movies, errorMessage, movieDetails } = useSelector<
    ApplicationState,
    MoviesState
  >((state: ApplicationState) => ({
    loading: state.movies.loading,
    movies: state.movies.movies,
    errorMessage: state.movies.errorMessage,
    movieDetails: state.movies.movieDetails,
  }));

  const getMovies = useCallback(
    (query: string, page: number) => dispatch(getMoviesAction(query, page)),
    [dispatch]
  );

  const clearMovies = useCallback(() => dispatch(clearMoviesAction()), [
    dispatch,
  ]);

  const getMovieDetails  = useCallback(
    (id: number) => dispatch(getMovieDetailsAction(id)),
    [dispatch]
  );

  const clearMovieDetails = useCallback(() => dispatch(clearMovieDetailsAction()), [
    dispatch,
  ]);

  return {
    loading,
    movies,
    errorMessage,
    movieDetails,
    getMovies,
    clearMovies,
    getMovieDetails,
    clearMovieDetails
  };
};
