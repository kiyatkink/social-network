import { Routes, RoutesPaths } from 'shared/config/routerConfig/routerConfig';
import MainPageIcon from 'shared/assets/main-icon.svg'
import AboutPageIcon from 'shared/assets/about-icon.svg'
import ProfilePageIcon from 'shared/assets/profile.svg'
import { SidebarItemProps } from '../ui/SidebarItem/SidebarItem';

export enum Items {
    ABOUT = 'about',
    MAIN = 'main',
    PROFILE = 'profile'
}
export const sidebarItemListConfig: Record<Items, SidebarItemProps> = {
  [Routes.MAIN]: {
    path: RoutesPaths[Routes.MAIN],
    label: 'Главная',
    Icon: MainPageIcon,
  },
  [Routes.ABOUT]: {
    path: RoutesPaths[Routes.ABOUT],
    label: 'О сайте',
    Icon: AboutPageIcon,
  },
  [Routes.PROFILE]: {
    path: RoutesPaths[Routes.PROFILE],
    label: 'Профиль',
    Icon: ProfilePageIcon,
  },
} as const
