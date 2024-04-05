import { ICounterSchema } from 'entities/Counter';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/authByUsername';
import {
    Action, Dispatch,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
// @ts-ignore
import { CombinedState } from 'redux';
import { IProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;

  // асинхронные редьюсеры
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
}

export type TStateSchemaKey = keyof IStateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (state: IStateSchema, action: Action) => CombinedState<IStateSchema>;
  add: (key: TStateSchemaKey, reducer: Reducer) => void;
  remove: (key: TStateSchemaKey) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReducerManager;
}

export interface IThunkExtraArg {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface IThunkConfig<T> {
  rejectValue: T,
  extra: IThunkExtraArg,
  dispatch?: Dispatch
}
