import { lazy } from "react";

// const MainPageLazy = lazy(() => import('./MainPage').then(module=>({default:module.MainPage})));

export const MainPageLazy = lazy(() => import('./MainPage'));

//export default lazy(() => import('./MainPage')) 