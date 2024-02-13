import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import type { FC } from 'react';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/authByUsername';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className = '' }) => {
    const { t } = useTranslation('router');
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onCloseModal = useCallback((): void => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback((): void => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
};
