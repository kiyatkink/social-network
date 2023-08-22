import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailPage } from 'pages/ArticleDetailPage';

export enum Routes {
  ABOUT = 'about',
  MAIN = 'main',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAIL = 'article_detail',
  NOT_FOUND = 'not_found',
}
export const RoutesPaths: Record<Routes, string> = {
  [Routes.ABOUT]: '/about',
  [Routes.PROFILE]: '/profile/', // :id
  [Routes.MAIN]: '/',
  [Routes.ARTICLES]: '/articles',
  [Routes.ARTICLE_DETAIL]: '/articles/', // :id
  [Routes.NOT_FOUND]: '*',
} as const;

export type RoutesPath = (typeof RoutesPaths)[keyof typeof RoutesPaths];

export type RoutePropsWithAuth = RouteProps & { onlyAuth?: boolean }
export const routeConfig: Record<Routes, RoutePropsWithAuth> = {
  [Routes.ABOUT]: {
    path: RoutesPaths[Routes.ABOUT],
    element: <AboutPage />,
  },
  [Routes.PROFILE]: {
    path: `${RoutesPaths[Routes.PROFILE]}:id`,
    element: <ProfilePage />,
    onlyAuth: true,
  },
  [Routes.MAIN]: {
    path: RoutesPaths[Routes.MAIN],
    element: <MainPage />,
  },
  [Routes.ARTICLES]: {
    path: RoutesPaths[Routes.ARTICLES],
    element: <ArticlesPage />,
    onlyAuth: true,
  },
  [Routes.ARTICLE_DETAIL]: {
    path: `${RoutesPaths[Routes.ARTICLE_DETAIL]}:id`,
    element: <ArticleDetailPage />,
    onlyAuth: true,
  },
  [Routes.NOT_FOUND]: {
    path: RoutesPaths[Routes.NOT_FOUND],
    element: <NotFound />,
  },
} as const;
