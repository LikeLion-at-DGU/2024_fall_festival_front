import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";
import { MainPage } from "@pages/main/MainPage";
import { PerformancePage } from "@pages/performance/PerformancePage";
import { NoticePage } from "@pages/notice/NoticePage";
import { BoothPage } from "@pages/booth/BoothPage";
import { AboutPage } from "@pages/about/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <MainPage /> },
      // 공연 페이지
      { path: "/performance", element: <PerformancePage /> },
      // 공지 페이지
      { path: "/notice", element: <NoticePage /> }, // named import 적용
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
