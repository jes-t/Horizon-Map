import { RouteProps } from 'react-router';

import { Map } from 'pages/Map';
import { Welcome } from 'pages/Welcome';
import { NotFound } from 'pages/NotFound';

export enum AppRoutes {
  WELCOME = 'welcome',
  MAP = 'map',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.WELCOME]: '/',
    [AppRoutes.MAP]: '/map',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.WELCOME]: {
        path: RoutePath.welcome,
        element: <Welcome />,
    },
    [AppRoutes.MAP]: {
        path: RoutePath.map,
        element: <Map />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFound />,
    },
};
