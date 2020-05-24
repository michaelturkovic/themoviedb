import { combineReducers } from 'redux';
import { moviesReducer } from 'src/reducers';

export const rootReducer = combineReducers({
  movies: moviesReducer,
});
