import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";

import { BoothPage } from "@pages/booth/BoothPage";
import { AboutPage } from "@pages/about/AboutPage";
import { MainPage } from "@pages/main/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      //부스페이지
      {
        path: "/booth-test",
        element: <BoothPage />,
      },
      //개발자페이지

      { path: "/about", element: <AboutPage /> },
    ],
  },
]);
