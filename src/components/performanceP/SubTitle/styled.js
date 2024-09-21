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
  font-weight: 600;
`;
export const SubTitle = styled.div`
  display: flex;
  color: #5f5f5f;
  ${({ theme }) => theme.fonts.AppleSDGothicNeoR00};
  font-size: 14px;
`;
