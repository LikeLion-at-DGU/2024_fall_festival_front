import styled from "styled-components";
import Error from "../../assets/images/error.png";

const BackGroundColor = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  color: #000;
  text-align: center;
  font-family: ${({ theme }) =>
    theme.fonts.NanumSquareRoundB["font-family"]};
  font-size: 16px;
  padding-bottom: 10px;
`;

const Content = styled.div`
  color: #000;
  text-align: center;
  font-family: ${({ theme }) =>
    theme.fonts.NanumSquareRoundR["font-family"]};
  font-size: 14px;
  padding-bottom: 9px;
`;

const Img = styled.img``;

export const NotFound = () => {
  return (
    <>
      <BackGroundColor>
        <Img src={Error} alt={Error} />
        <br />
        <Main>죄송합니다. 현재 찾을 수 없는 페이지입니다.</Main>
        <br />
        <Content>
          새로고침 혹은 현재 네트워크 상태를 확인해 주십시오
        </Content>
        <Content>감사합니다.</Content>
      </BackGroundColor>
    </>
  );
};

export default NotFound;
