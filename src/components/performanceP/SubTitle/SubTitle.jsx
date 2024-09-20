import * as S from "./styled";

export const SubTitle = ({ title, subTitle }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.Container>
  );
};
