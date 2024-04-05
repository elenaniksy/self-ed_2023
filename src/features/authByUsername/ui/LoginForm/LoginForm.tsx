import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { Text, ETextTheme } from 'shared/ui/Text/Text';
import {
    DynamicModuleLoader,
    TReducersList,
} from 'shared/lib/component/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'app/providers/StoreProvider';
import {
    loginByUsername,
} from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

export interface ILoginFormProps {
  className?: string;
  onClose?: () => void;
}

const initialReducers: TReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onClose }: ILoginFormProps) => {
    const { t } = useTranslation('authorization');
    const dispatch = useAppDispatch();
    const loginFormState = useAppSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        if (loginFormState) {
            const response = await dispatch(loginByUsername({
                username: loginFormState?.username,
                password: loginFormState?.password,
            }));
            if (response.meta.requestStatus === 'fulfilled') {
                onClose?.();
            }
        }
    }, [dispatch, onClose, loginFormState]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div
                className={classNames(cls.LoginForm, {}, [className])}
            >
                <Text title={t('Форма авторизации')} />
                {loginFormState?.error && (
                    <Text text={loginFormState?.error} theme={ETextTheme.ERROR} />
                )}
                <Input
                    className={cls.input}
                    label={t('Логин')}
                    onChange={onChangeUserName}
                    value={loginFormState?.username}
                />
                <Input
                    className={cls.input}
                    label={t('Пароль')}
                    onChange={onChangePassword}
                    value={loginFormState?.password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={
                        loginFormState?.isLoading
                  || (!loginFormState?.username.length && !loginFormState?.password.length)
                    }
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
});

export default LoginForm;
