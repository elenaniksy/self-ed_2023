import { initReactI18next } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';

i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: false,

        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        resources: { ru: { translations: {} } },
    });

export default i18n;
