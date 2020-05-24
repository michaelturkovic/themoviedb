export enum AppActionTypes {
    GET_SESSION_ID = 'GET_SESSION_ID'
}

export interface IGetSessionId {
    type: AppActionTypes.GET_SESSION_ID
    payload: string;
  }

export type AppActions = IGetSessionId;