import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from 'src/store';
import { MoviesState } from 'src/reducers';
import { useCallback } from 'react';
import {
  getMovies as getMoviesAction,
  clearMovies as clearMoviesAction,
} from 'src/actions';

export const useMoviesStore = () => {
  const dispatch = useDispatch();

  const { loading, movies, errorMessage } = useSelector<
    ApplicationState,
    MoviesState
  >((state: ApplicationState) => ({
    loading: state.movies.loading,
    movies: state.movies.movies,
    errorMessage: state.movies.errorMessage,
  }));

  const getMovies = useCallback(
    (query: string, page: number) => dispatch(getMoviesAction(query, page)),
    [dispatch]
  );

  const clearMovies = useCallback(() => dispatch(clearMoviesAction()), [
    dispatch,
  ]);

  return {
    loading,
    movies,
    errorMessage,
    getMovies,
    clearMovies
  };
};
