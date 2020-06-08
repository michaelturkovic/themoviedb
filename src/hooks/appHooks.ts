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

  const { routes, guestSessionId, errorMessage } = useSelector<
    ApplicationState,
    AppState
  >((state: ApplicationState) => ({
    routes: state.app.routes,
    guestSessionId: state.app.guestSessionId,
    errorMessage: state.app.errorMessage,
  }));

  const getSessionId = useCallback(() => dispatch(getSessionIdAction()), [
    dispatch,
  ]);

  const setSessionId = useCallback(
    (sessionId: string) => dispatch(setSessionIdAction(sessionId)),
    [dispatch]
  );

  return {
    routes,
    guestSessionId,
    errorMessage,
    getSessionId,
    setSessionId,
  };
};
