import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { ISidebarItem } from 'widgets/SideBar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';

interface ISidebarItemProps {
  item: ISidebarItem;
  collapsed: boolean;
}

export const SidebarItem = memo(({
    item,
    collapsed,
}: ISidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <div className={cls.SidebarItem}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to={item.path}
                className={classNames(
                    cls.link,
                    {
                        [cls.collapsed]: collapsed,
                    },
                    [],
                )}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.text}>
                    {t(item.text)}
                </span>
            </AppLink>
        </div>
    );
});
