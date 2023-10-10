import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    theme: AppLinkTheme;
    className?: string;
}

export const AppLink: FC<AppLinkProps> = ({
    theme = AppLinkTheme.PRIMARY,
    className ='',
    to,
    children,
    ...rest
}) => {

    return (
        <Link 
            to={to} 
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...rest}
        >
            {children}
        </Link>
    )
}