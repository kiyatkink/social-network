import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';
import { Path } from 'webpack-cli';

export enum Routes {
  ABOUT = 'about',
  MAIN = 'main',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}
export const RoutesPaths: Record<Routes, string> = {
  [Routes.ABOUT]: '/about',
  [Routes.PROFILE]: '/profile',
  [Routes.MAIN]: '/',
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
    path: RoutesPaths[Routes.PROFILE],
    element: <ProfilePage />,
    onlyAuth: true,
  },
  [Routes.MAIN]: {
    path: RoutesPaths[Routes.MAIN],
    element: <MainPage />,
  },
  [Routes.NOT_FOUND]: {
    path: RoutesPaths[Routes.NOT_FOUND],
    element: <NotFound />,
  },
} as const;
