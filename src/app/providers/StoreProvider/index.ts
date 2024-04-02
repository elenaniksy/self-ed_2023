import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type { IStateSchema, IReduxStoreWithManager } from './config/StateSchema';
import { useAppSelector } from './config/store.hook';

export {
    StoreProvider,
    createReduxStore,
    IStateSchema,
    IReduxStoreWithManager,
    useAppSelector,
};

export type { AppDispatch };
