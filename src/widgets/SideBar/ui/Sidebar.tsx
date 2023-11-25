import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { Button } from 'shared/ui/Button/Button';
import cls from './SideBar.module.scss';

export interface SideBarProps {
    className?: string;
}

export function SideBar({ className = '' }: SideBarProps) {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => setCollapsed(!collapsed);

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.SideBar,
                {
                    [cls.collapsed]: collapsed,
                },
                [className],
            )}
        >
            <Button data-testid="sidebar-toggle" type="button" onClick={onToggle}>
                {t('Свернуть')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
}
