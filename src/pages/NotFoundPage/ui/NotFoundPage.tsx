import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

function NotFoundPage({ className }: NotFoundPageProps) {
    const { t } = useTranslation('router');

    return (
        <div
            className={classNames(cls.NotFountPage, {}, [className])}
        >
            {t('Страница не найдена')}
        </div>
    );
}

export default NotFoundPage;
