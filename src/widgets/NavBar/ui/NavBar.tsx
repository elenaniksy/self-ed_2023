import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import type { FC } from 'react';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/authByUsername';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store.hook';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className = '' }) => {
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
};
