import { RouteProps } from "react-router";

import { Map } from "pages/Map";
import { Welcome } from "pages/Welcome";

export enum AppRoutes {
  WELCOME = "welcome",
  MAP = "map",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.WELCOME]: "/",
  [AppRoutes.MAP]: "/map",
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
};
