import {
    getCounterValueSelector,
} from './getCounterValue';

describe('getCounterValue', () => {
    test('should return counter value', () => {
        const state = {
            counter: { value: 10 },
        };
        expect(getCounterValueSelector(state)).toEqual(10);
    });
});
