import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { IStateSchema } from 'app/providers/StoreProvider';
import {
    ThunkDispatch,
    UnknownAction,
} from '@reduxjs/toolkit';

export const useAppDispatch = (): ThunkDispatch<IStateSchema, any, UnknownAction> => useDispatch();

export const useAppSelector: TypedUseSelectorHook<IStateSchema> = useSelector;
