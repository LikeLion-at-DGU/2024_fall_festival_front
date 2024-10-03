import * as S from "./styled";
import { useState } from "react";
import { StarLineUp } from "../../../constant/TimeTable/data";

export const StarBar = ({ onStarClick }) => {
  const [selectedStar, setSelectedStar] = useState(null);

  const handleClick = (index) => {
    setSelectedStar(index);
    onStarClick(StarLineUp[index].id);
  };

  return (
    <S.Container>
      {StarLineUp.map((starItem, index) => (
        <S.StarWrapper key={index}>
          <S.StarImgDiv
            style={{ backgroundImage: `url(${starItem.starImg})` }}
            onClick={() => handleClick(index)}
            isSelected={selectedStar === index}
          >
            <svg width="80" height="80" viewBox="0 0 110 110">
              <defs>
                {/* conic 그라디언트를 활용하여 색상 변화를 추가 */}
                <linearGradient
                  id={`grad-${index}`}
                  gradientTransform="rotate(45)"
                >
                  <stop offset="0%" stopColor="#E46442" />
                  <stop offset="15%" stopColor="#fff" />
                  <stop offset="50%" stopColor="#E46442" />

                  <stop offset="100%" stopColor="#F6CDBC" />
                </linearGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="50"
                stroke={`url(#grad-${index})`} /* 각도 그라디언트 적용 */
                strokeWidth="7"
                fill="none"
                strokeDasharray="346.36" /* 원의 둘레 = 2 * pi * 50 */
                strokeDashoffset={
                  selectedStar === index ? "0" : "346.36"
                }
                style={{
                  transition: "stroke-dashoffset 2s ease",
                }}
              />
            </svg>
          </S.StarImgDiv>
          <div>{starItem.star}</div>
        </S.StarWrapper>
      ))}
    </S.Container>
  );
};
