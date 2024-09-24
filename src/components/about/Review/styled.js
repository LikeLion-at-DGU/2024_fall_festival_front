import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;     
  align-items: center;
  justify-content:center;
  gap: 20px; 
  margin-top:50px; 
`;

export const MentPlusLink = styled.div`
  display:flex;
  flex-direction:column;
  gap:7px;
  margin-bottom:30px;
  align-items: center;
  justify-content:center;
`;
export const MainMent = styled.div`
  color: #000;
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoUL00['font-family']};
  font-size: 12px;
`;

export const LinkImg = styled.img`
  transition: transform 0.1s;
`;

export const Link = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  gap:8px;
  width: 114px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 20px;
  background:#FFEADA;

  &:hover ${LinkImg} {
    transform: rotate(-30deg);
  }
`;

export const LinkMent = styled.div`
  color: #ED6308;
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoM00['font-family']};
  font-size: 12px;
  margin-top:3px;
`;