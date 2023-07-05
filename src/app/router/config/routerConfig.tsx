import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const Routes = {
  ABOUT: 'about',
  MAIN: 'main',
} as const;

type Route = (typeof Routes)[keyof typeof Routes];

const RoutesPaths: Record<Route, string> = {
  [Routes.ABOUT]: '/about',
  [Routes.MAIN]: '/',
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
} as const;
