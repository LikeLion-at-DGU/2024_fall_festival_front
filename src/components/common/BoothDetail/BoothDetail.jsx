import * as S from "./styled";
import { useState, useRef } from "react";
import tablingImg from "../../../assets/images/tabling.svg";
import CancelIcon from "../../../assets/images/X_Icon.svg";
import { useNavigate } from "react-router-dom";
import { Detailtitle } from "../../../constant/StarDetail/data";
import { useBoothDetailData } from "../../../hook/useBoothDetail";

export const BoothDetail = ({ onClose, booth_id, boothInfo }) => {
  console.log("boothInfo:", boothInfo);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgWrapperRef = useRef(null);
  const { boothDetailData } = useBoothDetailData(booth_id);
  console.log("boothDetail컴포넌트에서 :", boothDetailData);
  if (!boothDetailData) {
    return <div>Loading...</div>;
  }
  const totalImages = boothDetailData?.details_image
    ? boothDetailData.details_image.length
    : 0;

  const handleTouchStart = (e) => {
    imgWrapperRef.current.startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const difference = imgWrapperRef.current.startX - endX;

    if (difference > 50) {
      handleNext();
    } else if (difference < -50) {
      handlePrev();
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const MoveonTabling = (insta_link) => {
    navigate(insta_link);
  };

  return (
    <S.DetailWrapper>
      <S.DetailContent>
        <S.NameContainer>
          <div className="BoothName">{boothInfo.name}</div>
          <S.tagContainer>
            <div className="tag">
              {boothInfo.is_night ? "밤부스" : "낮부스"}
            </div>
            <div className="tag">{boothInfo.location}</div>
            <div className="tag">{boothInfo.category}</div>
          </S.tagContainer>
          <S.CloseBtn src={CancelIcon} onClick={onClose} />
        </S.NameContainer>
        <S.imgWrapper
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          ref={imgWrapperRef}
        >
          <S.BoothDetailImage
            src={boothDetailData.details_image[currentIndex]}
            alt={boothDetailData.booth}
          />
          <S.imgCount>
            {currentIndex + 1}/{totalImages}
          </S.imgCount>
        </S.imgWrapper>
        <S.DetailInfo>
          <S.Details>
            {Detailtitle.map((title, index) => (
              <div className="InfoWrapper" key={index}>
                <div className="InfoContainer">
                  <S.DetailTitle>{title}</S.DetailTitle>
                  <S.DetailContext
                    index={index}
                    onClick={() => {
                      if (index === 5) {
                        // 인스타그램 ID인 경우
                        window.open(
                          `https://instagram.com/${boothDetailData.insta_id}`,
                          "_blank"
                        ); // 새 탭에서 열기
                      }
                    }}
                    style={{ cursor: index === 5 ? "pointer" : "default" }}
                  >
                    {index === 0 && boothDetailData.description}
                    {index === 1 && boothDetailData.operation}
                    {index === 2 &&
                      `${boothDetailData.start_time.slice(
                        0,
                        5
                      )} ~ ${boothDetailData.end_time.slice(0, 5)}`}
                    {index === 3 && boothDetailData.entrace_fee}
                    {index === 4 && boothDetailData.menus}
                    {index === 5 && boothDetailData.insta_id}
                  </S.DetailContext>
                </div>
                {index === 2 && <S.Divider />}
                {index === 4 && <S.Divider />}
              </div>
            ))}
          </S.Details>
        </S.DetailInfo>
      </S.DetailContent>
      {boothInfo.is_reservable === true && (
        <S.tabling
          src={tablingImg}
          onClick={() => MoveonTabling(boothDetailData.insta_link)}
        ></S.tabling>
      )}
    </S.DetailWrapper>
  );
};
