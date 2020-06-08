import { IMovieDetails, IMovie, IGenre } from 'src/reducers';

export enum MoviesActionTypes {
  LOADING = 'LOADING',
  GET_MOVIES = 'GET_MOVIES',
  MOVIES_ERROR = 'MOVIES_ERROR',
  CLEAR_MOVIES = 'CLEAR_MOVIES',
  GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS',
  CLEAR_MOVIE_DETAILS = 'CLEAR_MOVIE_DETAILS',
  GET_RATED_MOVIES = 'GET_RATED_MOVIES',
  GET_GENRES = 'GET_GENRES',
  GET_SEARCH_MOVIES = 'GET_SEARCH_MOVIES',
  CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS',
  GET_TRENDING_MOVIES = 'GET_TRENDING_MOVIES',
  CLEAR_TRENDING_MOVIES = 'CLEAR_TRENDING_MOVIES'
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
  type: MoviesActionTypes.MOVIES_ERROR;
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
  type: MoviesActionTypes.CLEAR_MOVIE_DETAILS;
}

export interface IGetRatedMovies {
  type: MoviesActionTypes.GET_RATED_MOVIES;
  payload: IMovie[];
}

export interface IGetGenres {
  type: MoviesActionTypes.GET_GENRES;
  payload: IGenre[];
}

export interface IGetSearchMovies {
  type: MoviesActionTypes.GET_SEARCH_MOVIES;
  payload: IMovie[];
}

export interface IClearSearchResults {
  type: MoviesActionTypes.CLEAR_SEARCH_RESULTS
}

export interface IGetTrendingMovies {
  type: MoviesActionTypes.GET_TRENDING_MOVIES,
  payload: IMovie[]
}

export interface IClearTrendingMovies {
  type: MoviesActionTypes.CLEAR_TRENDING_MOVIES
}

export type MoviesAction =
  | IMoviesLoading
  | IGetMovies
  | IMoviesError
  | IMoviesClear
  | IGetMovieDetails
  | IClearMovieDetails
  | IGetRatedMovies
  | IGetGenres
  | IGetSearchMovies
  | IClearSearchResults
  | IGetTrendingMovies
  | IClearTrendingMovies;
