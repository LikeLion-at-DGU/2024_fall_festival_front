import { useState, useEffect } from "react";
import * as S from "./Styled";
import { Slide } from "../slide/Slide";
import { SubTitle } from "../SubTitle/SubTitle";
export const PerformanceSlide = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();

      // 30분 단위로 분을 맞춤
      minutes = minutes >= 30 ? 30 : 0;

      const formattedTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hours,
        minutes
      ).toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, // 12시간제로 표시
      });

      setCurrentTime(formattedTime);
    };

    // 컴포넌트가 마운트될 때 시간 설정
    updateTime();

    // 30분마다 시간 갱신
    const intervalId = setInterval(updateTime, 60000 * 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <S.Container>
      <SubTitle title={"현재 진행중인 공연"} subTitle={`${currentTime} 기준`} />
      <Slide />
    </S.Container>
  );
};
