import { ThunkAction} from 'redux-thunk';
import { AnyAction } from 'redux';

export type Action<ReturnType = void> = ThunkAction<
  ReturnType,
  {},
  {},
  AnyAction
>;
