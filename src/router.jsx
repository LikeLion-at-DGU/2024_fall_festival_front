import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "@layout/DefaultLayout";
import { MainPage } from "@pages/main/MainPage";
import { PerformancePage } from "@pages/performance/PerformancePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <MainPage /> },
      //공연페이지
      { path: "/performance", element: <PerformancePage /> },
    ],
  },
]);
