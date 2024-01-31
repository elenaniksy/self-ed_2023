import { ICounterSchema } from 'entities/Counter';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
    test('counter decrement', () => {
        const state: ICounterSchema = { value: 10 };
        expect(counterReducer(state as ICounterSchema, counterActions.decrement()))
            .toEqual({ value: 9 });
    });

    test('counter increment', () => {
        const state: ICounterSchema = { value: 10 };
        expect(counterReducer(state as ICounterSchema, counterActions.increment()))
            .toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment()))
            .toEqual({ value: 1 });
    });
});
