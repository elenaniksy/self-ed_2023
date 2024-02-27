import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks/store.hook';
import { Text, ETextTheme } from 'shared/ui/Text/Text';
import {
    loginByUsername,
} from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/loginSlice';

interface ILoginForm {
  className?: string;
  onClose?: () => void;
}

export const LoginForm = memo(({ className = '', onClose }: ILoginForm) => {
    const { t } = useTranslation('authorization');
    const dispatch = useAppDispatch();
    const {
        username, password, isLoading, error,
    } = useAppSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        // @ts-ignore
        dispatch(loginByUsername({ username, password }));
        onClose?.();
    }, [dispatch, onClose, password, username]);

    return (
        <div
            className={classNames(cls.LoginForm, {}, [className])}
        >
            <Text title={t('Форма авторизации')} />
            {error && <Text text={error} theme={ETextTheme.ERROR} />}
            <Input
                className={cls.input}
                label={t('Логин')}
                onChange={onChangeUserName}
                value={username}
            />
            <Input
                className={cls.input}
                label={t('Пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading || (!username.length && !password.length)}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
