import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from 'src/store';
import { useCallback } from 'react';
import { AppState } from 'src/reducers';
import {
  getSessionId as getSessionIdAction,
  setSessionId as setSessionIdAction,
} from 'src/actions';

export const useAppStore = () => {
  const dispatch = useDispatch();

  const { guestSessionId } = useSelector<ApplicationState, AppState>(
    (state: ApplicationState) => ({
      guestSessionId: state.app.guestSessionId,
    })
  );

  const getSessionId = useCallback(() => dispatch(getSessionIdAction()), [
    dispatch,
  ]);

  const setSessionId = useCallback(
    (sessionId: string) => dispatch(setSessionIdAction(sessionId)),
    [dispatch]
  );

  return {
    guestSessionId,
    getSessionId,
    setSessionId
  };
};
