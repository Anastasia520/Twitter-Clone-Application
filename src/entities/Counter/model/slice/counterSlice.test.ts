import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice', () => {
    test('action decrement', () => {
        const state: CounterSchema = {
            value: 11,
        };

        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: 10,
        });
    });

    test('action increment', () => {
        const state: CounterSchema = {
            value: 11,
        };

        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 12,
        });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });
});
