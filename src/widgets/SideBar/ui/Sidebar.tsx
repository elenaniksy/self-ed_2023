import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

import { SidebarItemsList } from '../model/items';
import { SidebarItem } from './SidebarItem/SidebarItem';
import cls from './SideBar.module.scss';

export interface SideBarProps {
    className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
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
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.links}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>
        </div>
    );
});
