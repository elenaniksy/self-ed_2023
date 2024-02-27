import {
    configureStore, ReducersMapObject,
    UnknownAction,
} from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/authByUsername';

export function createReduxStore(initialState?: IStateSchema) {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<IStateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
