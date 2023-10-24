import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';

import type { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
    className = '',
    children,
    theme = ThemeButton.CLEAR,
    ...otherProps
}: ButtonProps) => (
    <button
        type="button"
        className={classNames(
            cls.Button,
            {},
            [className, cls[theme]],
        )}
        {...otherProps}
    >
        {children}
    </button>
);
