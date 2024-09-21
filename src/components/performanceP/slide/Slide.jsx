import * as S from "./Styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Slide = () => {
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
    // variableWidth: true,
  };
  return (
    <S.Container>
      <Slider {...settings}>
        <S.i>
          <S.SlideItem>
            <h2>슬라이드 1</h2>
            <p>공연 정보: 19:00 - 20:00</p>
          </S.SlideItem>
        </S.i>
        <S.i>
          <S.SlideItem>
            <h2>슬라이드 2</h2>
            <p>공연 정보: 20:00 - 21:00</p>
          </S.SlideItem>
        </S.i>
        <S.i>
          <S.SlideItem>
            <h2>슬라이드 3</h2>
            <p>공연 정보: 21:00 - 22:00</p>
          </S.SlideItem>
        </S.i>
      </Slider>
    </S.Container>
  );
};
