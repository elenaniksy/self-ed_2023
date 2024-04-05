import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
    IStateSchema, IThunkConfig, IReduxStoreWithManager,
} from './config/StateSchema';
import { useAppSelector } from './config/store.hook';

export {
    StoreProvider,
    createReduxStore,
    IStateSchema,
    IReduxStoreWithManager,
    useAppSelector,
    IThunkConfig,
};

export type { AppDispatch };
