import { Routes, RoutesPaths } from 'shared/config/routerConfig/routerConfig';
import MainPageIcon from 'shared/assets/main-icon.svg'
import AboutPageIcon from 'shared/assets/about-icon.svg'
import ProfilePageIcon from 'shared/assets/profile.svg'
import ArticlesPageIcon from 'shared/assets/articles-icon.svg'
import { SidebarItemProps } from '../ui/SidebarItem/SidebarItem';

export enum Items {
    ABOUT = 'about',
    MAIN = 'main',
    PROFILE = 'profile',
    ARTICLES = 'articles',
}

export interface SidebarItemPropsAndParams extends SidebarItemProps {
  onlyAuth?: boolean
}
export const sidebarItemListConfig: Record<Items, SidebarItemPropsAndParams> = {
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
    onlyAuth: true,
  },
  [Routes.ARTICLES]: {
    path: RoutesPaths[Routes.ARTICLES],
    label: 'Статьи',
    Icon: ArticlesPageIcon,
    onlyAuth: true,
  },
} as const
