import * as S from "./styled";
import { StarLineUp } from "../../../constant/TimeTable/data";
export const StarBar = () => {
  return (
    <S.Container>
      {StarLineUp.map((starItem, index) => (
        <S.StarWrapper key={index}>
          <S.StarImgDiv
            style={{ backgroundImage: `url(${starItem.starImg})` }}
          />
          <div>{starItem.star}</div>
        </S.StarWrapper>
      ))}
    </S.Container>
  );
};
