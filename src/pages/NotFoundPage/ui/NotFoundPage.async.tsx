import { lazy } from 'react';

export const NotFoundPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТОЛЬКО ДЛЯ ИМИТАЦИИ ЗАГРУЗКИ
      setTimeout(() => resolve(import('./NotFoundPage')), 1500);
    }),
);
