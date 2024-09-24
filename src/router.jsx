import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "@layout/DefaultLayout";
import { MainPage } from "@pages/main/MainPage";
import { PerformancePage } from "@pages/performance/PerformancePage";
import { BoothPage } from "@pages/booth/BoothPage";
import { About } from "@pages/about/AboutPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <MainPage /> },
      //공연페이지
      { path: "/performance", element: <PerformancePage /> },
      //부스페이지
      { path: "/booth", element: <BoothPage /> },
      //개발자페이지
      { path: "/about", element: <About />},
    ],
  },
]);
