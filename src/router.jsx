import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "@layout/DefaultLayout";
import { MainPage } from "@pages/main/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ path: "", element: <MainPage /> }],
  },
]);
