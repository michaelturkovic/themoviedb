import { combineReducers } from 'redux';
import { moviesReducer, appReducer } from 'src/reducers';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  app: appReducer
});
