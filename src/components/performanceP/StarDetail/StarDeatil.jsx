import * as S from "../../common/BoothDetail/styled";
import CancelIcon from "../../../assets/images/X_Icon.svg";
import { StarDetailInfo, Detailtitle } from "../../../constant/StarDetail/data";
export const StarDetail = ({ onClose }) => {
  return (
    <S.DetailWrapper>
      <S.DetailContent>
        <S.NameContainer>
          <div className="StarName">{StarDetailInfo[0].star}</div>
          <S.CloseBtn src={CancelIcon} onClick={onClose} />
        </S.NameContainer>

        <S.StarDetailImage
          src={StarDetailInfo[0].starImg}
          alt={StarDetailInfo[0].star}
        />
        <S.DetailInfo>
          <S.Details>
            {Detailtitle.map((title, index) => (
              <div className="InfoWrapper" key={index}>
                <div className="InfoContainer">
                  <S.DetailTitle>{title}</S.DetailTitle>
                  <S.DetailContext index={index}>
                    {index === 0 && StarDetailInfo[0].description}
                    {index === 1 && StarDetailInfo[0].song}
                    {index === 2 && StarDetailInfo[0].insta}
                    {index === 3 && StarDetailInfo[0].youtube}
                  </S.DetailContext>
                </div>
                {index === 1 && <S.Divider />}
              </div>
            ))}
          </S.Details>
        </S.DetailInfo>
      </S.DetailContent>
    </S.DetailWrapper>
  );
};
