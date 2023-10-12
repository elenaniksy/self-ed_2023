import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";

import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar: FC<NavBarProps> = ({className = ''}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink 
                    theme={AppLinkTheme.SECONDARY} 
                    to="/"
                >
                    Главная
                </AppLink>
                <AppLink 
                    theme={AppLinkTheme.SECONDARY} 
                    to="/about"
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    )
};