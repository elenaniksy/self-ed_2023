import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import React from 'react';

import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface ISidebarItem {
  path: string;
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: ISidebarItem[] = [
    {
        path: RoutePath.main,
        text: 'Главная страница',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Страница пользователя',
        Icon: ProfileIcon,
    },
];
