import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
export const Title = styled.div`
  display: flex;
  color: #000;
  ${({ theme }) => theme.fonts.AppleSDGothicNeoB00};
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const SubTitle = styled.div`
  display: flex;
  color: #5f5f5f;
  font-family: "AppleSDGothicNeoR00";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
