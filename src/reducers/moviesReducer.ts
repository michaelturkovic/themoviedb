import { MoviesState } from './models';
import { MoviesAction, MoviesActionTypes } from 'src/actions';

const initialState: MoviesState = {
  loading: false,
  movies: [],
  errorMessage: null,
  movieDetails: null,
  ratedMovies: [],
  genres: [],
  searchResults: [],
};

export const moviesReducer = (
  state: MoviesState = initialState,
  action: MoviesAction
): MoviesState => {
  switch (action.type) {
    case MoviesActionTypes.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case MoviesActionTypes.GET_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
      };
    case MoviesActionTypes.ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case MoviesActionTypes.CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
      };
    case MoviesActionTypes.GET_MOVIE_DETAILS:
      let movie = state.ratedMovies.find((el) => el.id === action.payload?.id);
      let movieDetails =
        movie !== undefined ? { ...movie, ...action.payload } : action.payload;

      return {
        ...state,
        movieDetails: movieDetails,
      };
    case MoviesActionTypes.CLEAR_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: null,
      };
    case MoviesActionTypes.GET_RATED_MOVIES:
      return {
        ...state,
        ratedMovies: action.payload,
      };
    case MoviesActionTypes.GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case MoviesActionTypes.GET_SEARCH_MOVIES:
      return {
        ...state,
        searchResults: action.payload,
      };
    case MoviesActionTypes.CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: [],
      };
    default:
      return state;
  }
};
