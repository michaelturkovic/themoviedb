export enum MoviesActionTypes {
  LOADING = 'LOADING',
  GET_MOVIES = 'GET_MOVIES',
  ERROR = 'ERROR',
  CLEAR_MOVIES = 'CLEAR_MOVIES',
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

export type MoviesAction =
  | IMoviesLoading
  | IGetMovies
  | IMoviesError
  | IMoviesClear;
