import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export function SideBar({ className = '' }: SideBarProps) {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => setCollapsed(!collapsed);

    return (
        <div
            className={classNames(
                cls.SideBar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <button type="button" onClick={onToggle}>
                {t('Свернуть')}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
}
