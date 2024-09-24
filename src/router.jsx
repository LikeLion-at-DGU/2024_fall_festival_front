import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "@layout/DefaultLayout";
import { MainPage } from "@pages/main/MainPage";
import { PerformancePage } from "@pages/performance/PerformancePage";
import { AboutPage } from "@pages/about/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <MainPage /> },
      //공연페이지
      { path: "/performance", element: <PerformancePage /> },
      //개발자페이지
      { path: "/about", element: <AboutPage />},
    ],
  },
]);
