import { AppState } from './models';
import { AppActions, AppActionTypes } from 'src/actions';

const initialState: AppState = {
  guestSessionId: null,
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
    default:
      return state;
  }
};
