import type { ComponentType } from "react";
import { createBrowserRouter, type RouteObject } from "react-router";
import RootLayout from "./layout";
import NotFound from "./not-found";

type PageModule = { default: ComponentType };
const page = (load: () => Promise<PageModule>): Pick<RouteObject, "lazy"> => ({
  lazy: async () => ({ Component: (await load()).default }),
});

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    // Shown while the first page's code loads; the pages are lazy.
    HydrateFallback: () => null,
    children: [
      { index: true, ...page(() => import("./page")) },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
