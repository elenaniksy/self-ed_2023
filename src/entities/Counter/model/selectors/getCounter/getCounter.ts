import { IStateSchema } from 'app/providers/StoreProvider';

export const getCounterSelector = (state: IStateSchema) => state.counter;
