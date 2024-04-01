import { IStateSchema } from 'app/providers/StoreProvider';

export const getLoginState = (state: IStateSchema) => state?.loginForm;
export const getLoginError = (state: IStateSchema) => state?.loginForm?.error;
export const getLoginIsLoading = (state: IStateSchema) => state?.loginForm?.isLoading;
export const getLoginUsername = (state: IStateSchema) => state?.loginForm?.username;
export const getLoginPassword = (state: IStateSchema) => state?.loginForm?.password;
