import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export function PageError({ className = '' }: PageErrorProps) {
    const { t } = useTranslation();

    // eslint-disable-next-line no-restricted-globals
    const reloadPage = () => location.reload();

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button type="button" onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
}
