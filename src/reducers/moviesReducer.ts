import { MoviesState } from './models';
import { MoviesAction, MoviesActionTypes } from 'src/actions';

const initialState: MoviesState = {
  loading: false,
  movies: [],
  errorMessage: null,
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
        movies: []
      }
    default:
      return state;
  }
};
