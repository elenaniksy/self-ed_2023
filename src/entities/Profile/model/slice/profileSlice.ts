import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile, IProfileSchema } from 'entities/Profile';

const initialState: IProfileSchema = {
    readOnly: true,
    isLoading: false,
    data: undefined,
    error: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
