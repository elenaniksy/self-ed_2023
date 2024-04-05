import { IUser, userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
    /**
     * для примера без использования изолированного класса
     * */
    // let dispatch: Dispatch;
    // let getState: () => IStateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });

    // test('success login', async () => {
    //     const userValue: IUser = {
    //         userName: 'admin',
    //         id: '1',
    //     };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     const action = loginByUsername({
    //         username: 'admin',
    //         password: 'admin',
    //     });
    //     const result = await action(dispatch, getState, undefined);
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toEqual(userValue);
    // });
    //
    // test('error login', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsername({
    //         username: 'admin',
    //         password: 'admin',
    //     });
    //     const result = await action(dispatch, getState, undefined);
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    // });

    test('success login', async () => {
        const userValue: IUser = {
            userName: 'admin',
            id: '1',
        };
        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await thunk.callThunk({ username: 'admin', password: 'admin' });
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: 'admin', password: 'admin' });
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
