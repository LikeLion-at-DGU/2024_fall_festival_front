import * as S from "./styled";
import { useState, useRef } from "react";
import tablingImg from "../../../assets/images/tabling.svg";
import CancelIcon from "../../../assets/images/X_Icon.svg";
import { useNavigate } from "react-router-dom";
import {
  Detailtitle,
  BoothDetailData,
} from "../../../constant/StarDetail/data";
// import { useBoothDetailData } from "../../../apis/boothDetail";
export const BoothDetail = ({ onClose }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgWrapperRef = useRef(null);

  const totalImages = BoothDetailData[0].src.length;

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

  const MoveonTabling = () => {
    navigate("/");
  };
  //   const DetailData = useBoothDetailData();
  return (
    <S.DetailWrapper>
      <S.DetailContent>
        <S.NameContainer>
          <div className="BoothName">{BoothDetailData[0].booth_name}</div>
          {/* {BoothDetailData[0].id_night===true && } */}
          <S.tagContainer>
            <div className="tag">
              {BoothDetailData[0].is_night ? "밤부스" : "낮부스"}
            </div>
            <div className="tag">{BoothDetailData[0].location}</div>
            <div className="tag">{BoothDetailData[0].category}</div>
          </S.tagContainer>
          <S.CloseBtn src={CancelIcon} onClick={onClose} />
        </S.NameContainer>
        <S.imgWrapper
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          ref={imgWrapperRef}
        >
          <S.BoothDetailImage
            src={BoothDetailData[0].src[currentIndex]}
            alt={BoothDetailData[0].booth_name}
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
                  <S.DetailContext index={index}>
                    {index === 0 && BoothDetailData[0].description}
                    {index === 1 && BoothDetailData[0].operation}
                    {index === 2 && BoothDetailData[0].time}
                    {index === 3 && BoothDetailData[0].fee}
                    {index === 4 && BoothDetailData[0].menu}
                    {index === 5 && BoothDetailData[0].insta}
                  </S.DetailContext>
                </div>
                {index === 2 && <S.Divider />}
                {index === 4 && <S.Divider />}
              </div>
            ))}
          </S.Details>
        </S.DetailInfo>
      </S.DetailContent>

      <S.tabling src={tablingImg} onClick={MoveonTabling}></S.tabling>
    </S.DetailWrapper>
  );
};
