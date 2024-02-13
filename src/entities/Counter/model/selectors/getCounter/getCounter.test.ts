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
        };
        expect(getCounterSelector(state)).toEqual({ value: 10 });
    });
});
