import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { IStateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction, Dispatch, UnknownAction } from '@reduxjs/toolkit';

export const useAppDispatch = (): Dispatch<UnknownAction> => useDispatch();

export const useAppSelector: TypedUseSelectorHook<IStateSchema> = useSelector;
