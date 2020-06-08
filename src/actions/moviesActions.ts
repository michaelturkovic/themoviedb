import axios from 'axios';
import { Dispatch } from 'redux';
import { Action } from 'src/store';
import { MoviesAction, MoviesActionTypes } from './types';
import { API_URL } from 'src/contstants';
import history from 'src/utils/history';
import { getRandomItem } from 'src/utils';

export const isLoading = (loading: boolean): MoviesAction => {
  return { type: MoviesActionTypes.LOADING, payload: loading };
};

export const setErrorMessage = (message: string): MoviesAction => {
  return { type: MoviesActionTypes.MOVIES_ERROR, payload: message };
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

export const getMovieDetails = (id: number): Action => async (
  dispatch: Dispatch<MoviesAction>
) => {
  try {
    dispatch(isLoading(true));

    let response = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: process.env.API_KEY,
      },
    });

    dispatch({
      type: MoviesActionTypes.GET_MOVIE_DETAILS,
      payload: response.data,
    });
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  } finally {
    dispatch(isLoading(false));
  }
};

export const clearMovieDetails = (): MoviesAction => {
  return { type: MoviesActionTypes.CLEAR_MOVIE_DETAILS };
};

export const rateMovie = (
  movieId: number,
  value: number,
  sessionId: string
): Action => async (dispatch: Dispatch<MoviesAction>) => {
  try {
    let data = {
      value,
    };
    let response = await axios.post(
      `${API_URL}/movie/${movieId}/rating`,
      data,
      {
        params: {
          api_key: process.env.API_KEY,
          guest_session_id: sessionId,
        },
      }
    );
    if (response.data.status_code === 1) {
      dispatch(getRatedMovies(sessionId));
    }
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};

export const getRatedMovies = (sessionId: string): any => async (
  dispatch: Dispatch<MoviesAction>
) => {
  try {
    let response = await axios.get(
      `${API_URL}/guest_session/${sessionId}/rated/movies`,
      {
        params: {
          api_key: process.env.API_KEY,
        },
      }
    );

    dispatch({
      type: MoviesActionTypes.GET_RATED_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};

export const getGenres = (): any => async (
  dispatch: Dispatch<MoviesAction>
) => {
  try {
    let response = await axios.get(`${API_URL}/genre/movie/list`, {
      params: {
        api_key: process.env.API_KEY,
      },
    });

    dispatch({
      type: MoviesActionTypes.GET_GENRES,
      payload: response.data.genres,
    });
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};

export const getRandomMovie = (genreId: number): Action => async (
  dispatch: Dispatch<MoviesAction>
) => {
  try {
    let responseByGenre = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: process.env.API_KEY,
        with_genres: genreId,
      },
    });

    let totalPages: number = responseByGenre.data.total_pages;
    let resultsPerPage: number = responseByGenre.data.results.length;
    let { randomPage, randomItem } = getRandomItem(totalPages, resultsPerPage);

    let response = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: process.env.API_KEY,
        with_genres: genreId,
        page: randomPage,
      },
    });

    let { id } = response.data.results[randomItem];
    history.push(`/movie/${id}`);
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};

export const searchMovies = (query: string): Action => async (
  dispatch: Dispatch<MoviesAction>
) => {
  try {
    dispatch(clearSearchResults());
    dispatch(isLoading(true));

    let response = await axios.get(`${API_URL}/search/movie`, {
      params: {
        api_key: process.env.API_KEY,
        query,
      },
    });

    dispatch({
      type: MoviesActionTypes.GET_SEARCH_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  } finally {
    dispatch(isLoading(false));
  }
};

export const clearSearchResults = (): MoviesAction => {
  return { type: MoviesActionTypes.CLEAR_SEARCH_RESULTS };
};

export const getTrendingMovies = (timeWindow: string): Action => async (
  dispatch: Dispatch<MoviesAction>
) => {
  try {
    dispatch(isLoading(true));

    let response = await axios.get(`${API_URL}/trending/movie/${timeWindow}`, {
      params: {
        api_key: process.env.API_KEY,
      },
    });

    dispatch({
      type: MoviesActionTypes.GET_TRENDING_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  } finally {
    dispatch(isLoading(false));
  }
};

export const clearTrendingMovies = (): MoviesAction => {
  return { type: MoviesActionTypes.CLEAR_TRENDING_MOVIES };
};
