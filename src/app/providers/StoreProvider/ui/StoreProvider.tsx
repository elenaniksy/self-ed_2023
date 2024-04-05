import type { FC } from 'react';
import type { IProps } from 'app/types/IProps';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { IStateSchema } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { TReducersList } from 'shared/lib/component/DynamicModuleLoader';

interface IStoreProviderProps extends IProps {
  initialState?: DeepPartial<IStateSchema>;
  asyncReducers?: TReducersList;
}

export const StoreProvider: FC<IStoreProviderProps> = ({
    children,
    initialState,
    asyncReducers,
}: IStoreProviderProps) => {
    const navigate = useNavigate();
    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>,
        navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
