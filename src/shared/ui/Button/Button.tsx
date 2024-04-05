import { classNames, Mods } from 'shared/lib/classNames/classNames';
import type { ButtonHTMLAttributes, FC } from 'react';
import React, { memo } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = memo<FC<ButtonProps>>(({
    className,
    children,
    theme = ButtonTheme.CLEAR,
    square = false,
    size = ButtonSize.M,
    disabled = false,
    ...otherProps
}: ButtonProps) => {
    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(
                cls.Button,
                mods,
                [className, cls[theme]],
            )}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
