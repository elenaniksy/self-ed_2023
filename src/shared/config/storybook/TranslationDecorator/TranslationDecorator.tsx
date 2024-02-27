import { Decorator } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import { Suspense } from 'react';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export const TranslationDecorator = (): Decorator => (Story) => (
    // <I18nextProvider i18n={i18nForTests}>
    <Suspense fallback="">
        <Story />
    </Suspense>
    // </I18nextProvider>
);
