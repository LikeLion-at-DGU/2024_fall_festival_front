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
        element: <MainPage />,
      },
      {
        path: "/booth-test",
        element: <BoothPage />,
      },

      { path: "/about", element: <AboutPage /> },
      //에러페이지
      {
        path: "/error",
        element: <NotFound />,
      },
    ],
  },
]);
