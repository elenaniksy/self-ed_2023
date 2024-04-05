import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { memo } from 'react';
import cls from './LangSwitcher.module.scss';

export enum Language {
  EN = 'en',
  RU = 'ru',
}

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo((
    {
        className,
        short,
    }: LangSwitcherProps,
) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = async (): Promise<void> => {
        await i18n.changeLanguage(
            i18n.language === Language.RU
                ? Language.EN
                : Language.RU,
        );
    };

    return (
        <Button
            className={classNames(
                cls.LangSwitcher,
                {},
                [className],
            )}
            onClick={toggleLanguage}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
