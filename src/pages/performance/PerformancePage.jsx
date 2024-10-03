//공연페이지 - 이쪽에서 각자 만든거 합치면 될거같아요
import * as S from "./PerformancePage.styled";
import { useState } from "react";

import { PerformanceSlide } from "@components/performanceP/performanceslide/PerformanceSlide";
import { TimeTable } from "@components/performanceP/timeTable/TimeTable";
import { StarDetail } from "@components/performanceP/StarDetail/StarDetail";
export const PerformancePage = () => {
  const [showDetail, setShowDetail] = useState(false);
  const handleShowDetail = () => {
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };
  return (
    <S.MainWrapper>
      <PerformanceSlide />
      <TimeTable onDetailClick={handleShowDetail} />
      {showDetail && <StarDetail onClose={handleCloseDetail} />}
    </S.MainWrapper>
  );
};
