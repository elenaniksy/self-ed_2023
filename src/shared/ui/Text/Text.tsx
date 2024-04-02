import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum ETextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface ITextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ETextTheme;
}

export const Text = memo(({
    className = '',
    text,
    title,
    theme = ETextTheme.PRIMARY,
}: ITextProps) => (
    <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
));
