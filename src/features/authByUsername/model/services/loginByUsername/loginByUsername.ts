import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export interface ILoginByUsernameRequest {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IUser,
  ILoginByUsernameRequest,
  { rejectValue: string }
>(
    'login/loginByUsername',
    async (data, thunkAPI) => {
        try {
            const response = await axios.post<IUser>('http://localhost:8000/login', { ...data });
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            console.log('error', e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
