import {
    configureStore,
    UnknownAction,
} from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { counterReducer } from 'entities/Counter';

export function createReduxStore(initialState?: IStateSchema) {
    return configureStore<IStateSchema, UnknownAction>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
