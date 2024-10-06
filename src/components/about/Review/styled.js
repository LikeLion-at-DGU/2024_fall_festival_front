import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

export const MentPlusLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
`;

export const MainMent = styled.div`
  color: #000;
  font-family: ${({ theme }) =>
    theme.fonts.AppleSDGothicNeoUL00["font-family"]};
  font-size: 12px;
`;

export const LinkImg = styled.img`
  transition: transform 0.1s;
`;

export const Link = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 114px;
  height: 26px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #ffeada;

  &:hover ${LinkImg} {
    transform: rotate(-30deg);
  }
`;

export const LinkMent = styled.div`
  display: flex;
  align-items: center;
  color: #ed6308;
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoM00["font-family"]};
  font-size: 12px;
  text-align: center;
`;
