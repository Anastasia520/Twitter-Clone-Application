import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND= "not_found"
}

export const RouterPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.NOT_FOUND]: "*",
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPaths.main,
        element: <MainPage />,
    },

    [AppRoutes.ABOUT]: {
        path: RouterPaths.about,
        element: <AboutPage />,
    },

    [AppRoutes.NOT_FOUND]: {
        path: RouterPaths.not_found,
        element: <NotFoundPage />,
    },
};
