import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';

const Routes = {
  ABOUT: 'about',
  MAIN: 'main',
  NOT_FOUND: 'not_found',
} as const;

type Route = (typeof Routes)[keyof typeof Routes];

const RoutesPaths: Record<Route, string> = {
  [Routes.ABOUT]: '/about',
  [Routes.MAIN]: '/',
  [Routes.NOT_FOUND]: '*',
} as const;

export const routeConfig: Record<Route, RouteProps> = {
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
