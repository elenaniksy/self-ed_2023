import { classNames } from 'shared/lib/classNames/classNames';

import cls from './LangSwitcher.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

export enum Language {
    EN = 'en',
    RU = 'ru',
}

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className = ''}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = async () => {
        i18n.changeLanguage(i18n.language === Language.RU ? Language.EN : Language.RU);
    } 

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggleLanguage}
        >
            {t('Язык')}
        </Button>     
    );
};