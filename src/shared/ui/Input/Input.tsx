import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useState } from 'react';
import cls from './Input.module.scss';

interface IInput extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>{
  classname?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;

}

export const Input = memo(({
    classname = '',
    value,
    onChange,
    type = 'text',
    label = '',
    placeholder = '',
    ...props
}: IInput) => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [classname])}>
            <div className={cls.label}>{label}</div>
            <input
                className={cls.input}
                value={value}
                onChange={onChangeHandler}
                type={type}
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
});
