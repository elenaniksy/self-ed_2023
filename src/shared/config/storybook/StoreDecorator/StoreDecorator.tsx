import { Decorator } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/authByUsername/model/slice/loginSlice';
import { TReducersList } from 'shared/lib/component/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const defaultAsyncReducers: TReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (
    initialState: DeepPartial<IStateSchema>,
    asyncReducers?: TReducersList,
): Decorator => (Story) => (
    <StoreProvider
        initialState={initialState}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <Story />
    </StoreProvider>
);
