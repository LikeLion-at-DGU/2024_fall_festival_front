import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";

import { BoothPage } from "@pages/booth/BoothPage";
import { AboutPage } from "@pages/about/AboutPage";
import { MainPage } from "@pages/main/MainPage";
import { NotFound } from "@pages/notfound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <BoothPage />,
      },

      { path: "/about", element: <AboutPage /> },
    ],

    errorElement: <NotFound />, // ErrorBoundary에 에러 핸들링 적용
  },
]);
