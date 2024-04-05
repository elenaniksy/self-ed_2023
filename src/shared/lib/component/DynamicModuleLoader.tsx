import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {
    IReduxStoreWithManager,
    TStateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { IProps } from 'app/types/IProps';

export type TReducersList = {
  [name in TStateSchemaKey]?: Reducer;
}

interface IDynamicModuleLoaderProps extends IProps{
  reducers: TReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;

    const store = useStore() as IReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as TStateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, _]) => {
                    store.reducerManager.remove(name as TStateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    // eslint-disable-next-line
  }, []);

    return (
        <div>
            {children}
        </div>
    );
};
