import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = ({ className = '' }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => setCollapsed(!collapsed);

    return (
        <div
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            <button type="button" onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
