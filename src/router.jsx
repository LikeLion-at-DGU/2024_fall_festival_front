import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";
import { MainPage } from "@pages/main/MainPage";
import { PerformancePage } from "@pages/performance/PerformancePage";
import { NoticePage } from "@pages/notice/NoticePage"; // named import로 변경

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
    ],
  },
]);
