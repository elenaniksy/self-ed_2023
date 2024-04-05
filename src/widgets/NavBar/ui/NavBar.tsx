import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/authByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppSelector } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar = memo(({ className }: NavBarProps) => {
    const { t } = useTranslation('router');
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const authData = useAppSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const onCloseModal = useCallback((): void => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback((): void => {
        setIsAuthModal(true);
    }, []);

    const onLogOut = useCallback((): void => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {authData
                ? (
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        className={cls.links}
                        onClick={onLogOut}
                    >
                        {t('Выйти')}
                    </Button>
                ) : (
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        className={cls.links}
                        onClick={onShowModal}
                    >
                        {t('Войти')}
                    </Button>
                )}
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </div>
    );
});
