//공연페이지 - 이쪽에서 각자 만든거 합치면 될거같아요
import * as S from "./PerformancePage.styled";
import { PerformanceSlide } from "@components/performanceP/performanceslide/PerformanceSlide";
import { TimeTable } from "@components/performanceP/timeTable/TimeTable";
export const PerformancePage = () => {
  return (
    <S.MainWrapper>
      <PerformanceSlide />
      <TimeTable />
    </S.MainWrapper>
  );
};
