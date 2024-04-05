import { IStateSchema } from 'app/providers/StoreProvider';
import {
    getLoginIsLoading,
    getLoginError,
    getLoginState,
    getLoginUsername,
    getLoginPassword,
} from './getLoginState';

describe('getLoginState.test', () => {
    const state: DeepPartial<IStateSchema> = {
        loginForm: {
            error: 'error',
            username: 'admin',
            isLoading: true,
            password: 'admin',
        },
    };
    const emptyState: DeepPartial<IStateSchema> = {};

    test('should work with empty state', () => {
        expect(getLoginState(emptyState as IStateSchema)).toEqual(undefined);
    });

    test('should return error', () => {
        expect(getLoginError(state as IStateSchema)).toEqual('error');
    });

    test('should work with empty error', () => {
        expect(getLoginError(emptyState as IStateSchema)).toEqual(undefined);
    });

    test('should return userName', () => {
        expect(getLoginUsername(state as IStateSchema)).toEqual('admin');
    });

    test('should work with empty username', () => {
        expect(getLoginUsername(emptyState as IStateSchema)).toEqual(undefined);
    });

    test('should return password', () => {
        expect(getLoginPassword(state as IStateSchema)).toEqual('admin');
    });

    test('should work with empty password', () => {
        expect(getLoginPassword(emptyState as IStateSchema)).toEqual(undefined);
    });

    test('should return isLoading', () => {
        expect(getLoginIsLoading(state as IStateSchema)).toBeTruthy();
    });

    test('should work with empty isLoading', () => {
        expect(getLoginIsLoading(emptyState as IStateSchema)).toBeFalsy();
    });
});
