import * as S from "./styled";
import Icon from "../../../assets/images/locationIcon.svg";
export const TimeSlot = ({ name, location, starImg, DetailBtnClick }) => {
  return (
    <S.Details>
      <S.ImagePlaceholder style={{ backgroundImage: `url(${starImg})` }} />
      <S.StarInfo>
        <S.Name>{name}</S.Name>
        {location && (
          <S.Location>
            <img src={Icon} />
            <div className="locationName">{location}</div>
          </S.Location>
        )}
        <S.DetailsButton onClick={DetailBtnClick}>상세보기</S.DetailsButton>
      </S.StarInfo>
    </S.Details>
  );
};
