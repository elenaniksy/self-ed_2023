import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface ILoginForm {
  className?: string;
}

export const LoginForm = ({ className = '' }: ILoginForm) => {
    const { t } = useTranslation('authorization');

    return (
        <div
            className={classNames(cls.LoginForm, {}, [className])}
        >
            <Input className={cls.input} label={t('Логин')} />
            <Input className={cls.input} label={t('Пароль')} />
            <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
