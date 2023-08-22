import { createSelector } from '@reduxjs/toolkit';
import { Routes, RoutesPaths } from 'shared/config/routerConfig/routerConfig';
import MainPageIcon from 'shared/assets/main-icon.svg';
import AboutPageIcon from 'shared/assets/about-icon.svg';
import ProfilePageIcon from 'shared/assets/profile.svg';
import ArticlesPageIcon from 'shared/assets/articles-icon.svg';
import { getUserData } from 'entities/User';
import { SidebarItemProps } from '../../ui/SidebarItem/SidebarItem';

export const getSidebarItems = createSelector([
  getUserData,
], (user) => {
  const sidebarItemListConfig: SidebarItemProps[] = [
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
  ]
  if (user) {
    sidebarItemListConfig.push(
      {
        path: `${RoutesPaths[Routes.PROFILE]}${user.profileId}`,
        label: 'Профиль',
        Svg: ProfilePageIcon,
      },
      {
        path: RoutesPaths[Routes.ARTICLES],
        label: 'Статьи',
        Svg: ArticlesPageIcon,
      },
    )
  }
  return sidebarItemListConfig
})
