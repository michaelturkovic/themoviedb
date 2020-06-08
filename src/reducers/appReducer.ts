import { AppState } from './models';
import { AppActions, AppActionTypes } from 'src/actions';

const initialState: AppState = {
  routes: [
    {name: 'Now Playing', path: 'now-playing'},
    {name: 'Popular', path: 'popular'},
    {name: 'Top Rated', path: 'top-rated'}
  ],
  guestSessionId: null,
  errorMessage: null,
};

export const appReducer = (
  state: AppState = initialState,
  action: AppActions
): AppState => {
  switch (action.type) {
    case AppActionTypes.GET_SESSION_ID:
      return {
        ...state,
        guestSessionId: action.payload,
      };
    case AppActionTypes.APP_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
