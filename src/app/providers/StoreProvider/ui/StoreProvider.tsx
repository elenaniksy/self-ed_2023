import type { FC } from 'react';
import type { IProps } from 'app/types/IProps';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { IStateSchema } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface IStoreProviderProps extends IProps {
  initialState?: IStateSchema;
  asyncReducers?: ReducersMapObject<IStateSchema>;
}

export const StoreProvider: FC<IStoreProviderProps> = ({
    children,
    initialState,
    asyncReducers,
}: IStoreProviderProps) => {
    const store = createReduxStore(initialState, asyncReducers);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
