import { createSelector } from '@reduxjs/toolkit';
import {
    getCounterSelector,
} from '../getCounter/getCounter';

export const getCounterValueSelector = createSelector(
    getCounterSelector,
    (counter) => counter.value,
);
