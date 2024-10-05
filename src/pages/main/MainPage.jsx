import * as S from "./MainPage.styled";

export const MainPage = () => {
  return (
    <S.MainWrapper
      style={{
        backgroundImage: `url("/images/preview.jpeg")`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    ></S.MainWrapper>
  );
};
