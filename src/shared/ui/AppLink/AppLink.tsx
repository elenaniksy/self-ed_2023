import { classNames } from 'shared/lib/classNames/classNames';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  theme: AppLinkTheme;
  className?: string;
}

export const AppLink = memo(({
    theme = AppLinkTheme.PRIMARY,
    className,
    to,
    children,
    ...rest
}: AppLinkProps) => (
    <Link
        to={to}
        className={classNames(
            cls.AppLink,
            {},
            [className, cls[theme]],
        )}
        {...rest}
    >
        {children}
    </Link>
));
