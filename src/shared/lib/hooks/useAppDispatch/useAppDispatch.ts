import { useDispatch } from 'react-redux';
import { AppDispatch, IStateSchema } from 'app/providers/StoreProvider';
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';

export const useAppDispatch = (): ThunkDispatch<
  IStateSchema,
  AppDispatch,
  UnknownAction> => useDispatch();
