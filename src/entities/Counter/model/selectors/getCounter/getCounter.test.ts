import {
    getCounterSelector,
} from './getCounter';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state = {
            counter: { value: 10 },
            user: {
                authData: undefined,
            },
            loginForm: {
                username: '',
                password: '',
                isLoading: false,
            },
        };
        expect(getCounterSelector(state)).toEqual({ value: 10 });
    });
});
