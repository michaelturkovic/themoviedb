import { IMovieDetails } from 'src/reducers';

export enum MoviesActionTypes {
  LOADING = 'LOADING',
  GET_MOVIES = 'GET_MOVIES',
  ERROR = 'ERROR',
  CLEAR_MOVIES = 'CLEAR_MOVIES',
  GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS',
  CLEAR_MOVIE_DETAILS = 'CLEAR_MOVIE_DETAILS'
}

export interface IMoviesLoading {
  type: MoviesActionTypes.LOADING;
  payload: boolean;
}

export interface IGetMovies {
  type: MoviesActionTypes.GET_MOVIES;
  payload: any;
}

export interface IMoviesError {
  type: MoviesActionTypes.ERROR;
  payload: string;
}

export interface IMoviesClear {
  type: MoviesActionTypes.CLEAR_MOVIES;
}

export interface IGetMovieDetails {
  type: MoviesActionTypes.GET_MOVIE_DETAILS;
  payload: IMovieDetails;
}

export interface IClearMovieDetails {
  type: MoviesActionTypes.CLEAR_MOVIE_DETAILS
}

export type MoviesAction =
  | IMoviesLoading
  | IGetMovies
  | IMoviesError
  | IMoviesClear
  | IGetMovieDetails
  | IClearMovieDetails;
