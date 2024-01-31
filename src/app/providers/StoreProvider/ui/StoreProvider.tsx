import type { FC } from 'react';
import type { IProps } from 'app/types/IProps';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { IStateSchema } from 'app/providers/StoreProvider';

interface IStoreProviderProps extends IProps {
  initialState?: IStateSchema;
}

export const StoreProvider: FC<IStoreProviderProps> = ({
    children,
    initialState,
}: IStoreProviderProps) => {
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
