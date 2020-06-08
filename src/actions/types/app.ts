export enum AppActionTypes {
  GET_SESSION_ID = 'GET_SESSION_ID',
  APP_ERROR = 'APP_ERROR',
}

export interface IGetSessionId {
  type: AppActionTypes.GET_SESSION_ID;
  payload: string;
}

export interface IAppError {
  type: AppActionTypes.APP_ERROR;
  payload: string;
}

export type AppActions = IGetSessionId | IAppError;
