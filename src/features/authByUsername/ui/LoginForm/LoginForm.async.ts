import { FC, lazy } from 'react';
import {
    ILoginFormProps,
} from './LoginForm';

export const LoginFormAsync = lazy<FC<ILoginFormProps>>(
    () => new Promise((resolve) => {
    // @ts-ignore
    // ТОЛЬКО ДЛЯ ИМИТАЦИИ ЗАГРУЗКИ
        setTimeout(() => resolve(import('./LoginForm')), 1500);
    }),
);
