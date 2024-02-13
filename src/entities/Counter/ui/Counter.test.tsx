import { screen } from '@testing-library/react';

import {
    ComponentRender,
} from 'shared/lib/tests/componentRender/componentRender';

import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('rendering', () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
                user: {
                    authData: undefined,
                },
            },
        });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });

    test('increment', async () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
                user: {
                    authData: undefined,
                },
            },
        });
        await userEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });

    test('decrement', async () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
                user: {
                    authData: undefined,
                },
            },
        });
        await userEvent.click(screen.getByTestId('decrement'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });
});
