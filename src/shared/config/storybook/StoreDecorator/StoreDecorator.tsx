import { Decorator } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
// @ts-ignore
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (initialState: DeepPartial<IStateSchema>): Decorator => (Story) => (
    <StoreProvider initialState={initialState}>
        <Story />
    </StoreProvider>
);
