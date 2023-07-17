import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';

export enum Routes {
  ABOUT = 'about',
  MAIN = 'main',
  NOT_FOUND = 'not_found',
}
export const RoutesPaths: Record<Routes, string> = {
  [Routes.ABOUT]: '/about',
  [Routes.MAIN]: '/',
  [Routes.NOT_FOUND]: '*',
} as const;

export type RoutesPath = (typeof RoutesPaths)[keyof typeof RoutesPaths];
export const routeConfig: Record<Routes, RouteProps> = {
  [Routes.ABOUT]: {
    path: RoutesPaths[Routes.ABOUT],
    element: <AboutPage />,
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
