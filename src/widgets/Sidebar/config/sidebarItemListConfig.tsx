import { Routes, RoutesPaths } from 'shared/config/routerConfig/routerConfig';
import MainPageIcon from 'shared/assets/main-icon.svg'
import AboutPageIcon from 'shared/assets/about-icon.svg'
import ProfilePageIcon from 'shared/assets/profile.svg'
import ArticlesPageIcon from 'shared/assets/articles-icon.svg'
import { SidebarItemProps } from '../ui/SidebarItem/SidebarItem';

export const sidebarItemListConfig: SidebarItemProps[] = [
  {
    path: RoutesPaths[Routes.MAIN],
    label: 'Главная',
    Svg: MainPageIcon,
  },
  {
    path: RoutesPaths[Routes.ABOUT],
    label: 'О сайте',
    Svg: AboutPageIcon,
  },
  {
    path: RoutesPaths[Routes.PROFILE],
    label: 'Профиль',
    Svg: ProfilePageIcon,
  },
  {
    path: RoutesPaths[Routes.ARTICLES],
    label: 'Статьи',
    Svg: ArticlesPageIcon,
  },
]
