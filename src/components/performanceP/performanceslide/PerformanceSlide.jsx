import { useState, useEffect } from "react";
import * as S from "./Styled";
import { Slide } from "../slide/Slide";
import { SubTitle } from "../SubTitle/SubTitle";
import Fire from "../fire/Fire";
export const PerformanceSlide = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentTime24, setCurrentTime24] = useState(""); // 24시간 형식
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

      // 24시간 형식으로 포맷
      const formattedTime24 = `${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}`;
      setCurrentTime(formattedTime);
      setCurrentTime24(formattedTime24); // 24시간 형식 시간 설정
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
      <Slide currentTime={currentTime24} />
      <Fire />
    </S.Container>
  );
};
