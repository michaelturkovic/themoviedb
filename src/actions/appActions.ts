import axios from 'axios';
import { Action } from 'src/store';
import { Dispatch } from 'react';
import { AppActions, AppActionTypes } from './types';
import { API_URL } from 'src/contstants';

export const getSessionId = (): Action => async (
  dispatch: Dispatch<AppActions>
) => {
  try {
    let response = await axios.get(
      `${API_URL}/authentication/guest_session/new`,
      {
        params: {
          api_key: process.env.API_KEY,
        },
      }
    );

    if (response.data.success) {
      dispatch(setSessionId(response.data.guest_session_id));

      let sessionData = {
        sessionId: response.data.guest_session_id,
        expiresAt: response.data.expires_at,
      };
      localStorage.setItem('guestSession', JSON.stringify(sessionData));
    }
  } catch (error) {
    console.log(error);
  }
};

export const setSessionId = (sessionId: string): AppActions => {
  return { type: AppActionTypes.GET_SESSION_ID, payload: sessionId };
};
