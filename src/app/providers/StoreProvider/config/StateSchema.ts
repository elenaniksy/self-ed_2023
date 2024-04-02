import { ICounterSchema } from 'entities/Counter';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/authByUsername';
import {
    AnyAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
// @ts-ignore
import { CombinedState } from 'redux';
import { IProfileSchema } from 'entities/Profile';

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
  reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
  add: (key: TStateSchemaKey, reducer: Reducer) => void;
  remove: (key: TStateSchemaKey) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReducerManager;
}
