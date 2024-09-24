import * as S from "./Styled";
import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { timeTableData } from "../../../constant/TimeTable/data2";
import SlideContent from "./SlideContents";
// 시간 문자열을 비교 가능한 값으로 변환하는 유틸리티 함수
const formatTime = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours * 60 + minutes; // 시간을 분 단위로 변환
};
export const Slide = ({ currentTime }) => {
  const sliderRef = useRef(null); // 슬라이더에 접근하기 위한 ref

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerPadding: "10%",
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // centerMode 사용
    swipeToSlide: true, // 터치로 슬라이드를 넘길 수 있게 설정
    arrows: false,
  };

  const groupedData = timeTableData.reduce((acc, event) => {
    if (!acc[event.startTime]) {
      acc[event.startTime] = [];
    }
    acc[event.startTime].push(event);
    return acc;
  }, {});

  //startTime기준으로 그 시간대랑 현재시간이랑 맞으면 그 슬라이드가 중앙으로오게함
  //나중에 날짜랑 배경색 변경까지 연동해야됨..
  useEffect(() => {
    const formattedCurrentTime = formatTime(currentTime); // 현재 시간을 분 단위로 변환

    const slideIndex = Object.keys(groupedData).reduce(
      (closestIndex, startTime, index, arr) => {
        const formattedStartTime = formatTime(startTime); // startTime을 분 단위로 변환
        const nextStartTime = arr[index + 1]
          ? formatTime(arr[index + 1])
          : null;

        const formattedNextStartTime = nextStartTime ? nextStartTime : null;

        // 현재 시간이 startTime과 다음 startTime 사이에 있는지 확인
        if (
          formattedCurrentTime >= formattedStartTime &&
          (!nextStartTime || formattedCurrentTime < formattedNextStartTime)
        ) {
          return index;
        }
        return closestIndex;
      },
      0 // 기본적으로 첫 번째 슬라이드로 설정
    );

    console.log("현재 시간:", currentTime); // 현재 시간을 출력
    console.log("이동할 슬라이드 인덱스:", slideIndex); // 이동할 슬라이드 인덱스를 출력

    if (sliderRef.current) {
      sliderRef.current.slickGoTo(slideIndex); // 해당 슬라이드로 이동
    }
  }, [currentTime, groupedData]);

  // 그룹화된 데이터를 슬라이드로 변환
  const slides = Object.keys(groupedData).map((startTime, index) => (
    <SlideContent
      key={index}
      startTime={startTime}
      events={groupedData[startTime]} // 같은 시간대의 공연들 전달
    />
  ));

  return (
    <S.Container>
      <Slider ref={sliderRef} {...settings}>
        {slides}
      </Slider>
    </S.Container>
  );
};
