import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { IThunkConfig } from 'app/providers/StoreProvider';

export interface ILoginByUsernameRequest {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IUser,
  ILoginByUsernameRequest,
  IThunkConfig<string>
>(
    'login/loginByUsername',
    async (data, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<IUser>('/login', { ...data });
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            console.log('error', e);
            return rejectWithValue('error');
        }
    },
);
