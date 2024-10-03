import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";

import { BoothPage } from "@pages/booth/BoothPage";
import { AboutPage } from "@pages/about/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [

   
      //부스페이지
      {
        path: "/:booth_id/:day/:category/:location/:is_night/:is_reservable",
        element: <BoothPage />,
      },
      //개발자페이지

      { path: "/about", element: <AboutPage /> },
    ],
  },
]);
