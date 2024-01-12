import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import type { FC } from 'react';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className = '' }) => {
    const { t } = useTranslation('router');

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links} />
        </div>
    );
};
