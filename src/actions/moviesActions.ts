import axios from 'axios';
import { Dispatch } from 'redux';
import { Action } from 'src/store';
import { MoviesAction, MoviesActionTypes } from './types';
import { API_URL } from 'src/contstants';

export const isLoading = (loading: boolean): MoviesAction => {
  return { type: MoviesActionTypes.LOADING, payload: loading };
};

export const setErrorMessage = (message: string): MoviesAction => {
  return { type: MoviesActionTypes.ERROR, payload: message };
};

export const clearMovies = (): MoviesAction => {
  return { type: MoviesActionTypes.CLEAR_MOVIES };
};

export const getMovies = (query: string, page: number): Action => async (
  dispatch: Dispatch<MoviesAction>
) => {
  try {
    dispatch(isLoading(true));

    let response = await axios.get(`${API_URL}/movie/${query}`, {
      params: {
        api_key: process.env.API_KEY,
        page,
      },
    });

    dispatch({
      type: MoviesActionTypes.GET_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  } finally {
    dispatch(isLoading(false));
  }
};
