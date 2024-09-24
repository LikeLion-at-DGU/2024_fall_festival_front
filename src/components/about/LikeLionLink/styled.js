import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;     
  align-items: center;
  justify-content:center;
  gap: 20px;  
`;

export const Photo = styled.img`
`;

export const MainMent = styled.div`
  color: #000;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoB00['font-family']};
  font-size: 16px;
`;

export const SubMent = styled.div`
  color: #000;
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoL00['font-family']};
  text-align: center;
  font-size: 16px;
`;

export const LinkMent = styled.div`
  color: #EB8F00;
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoM00['font-family']};
  font-size: 10px;
`;

export const LinkImg = styled.img`
  transition: transform 0.1s;
`;

export const AllMent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap:5px;
`;

export const MentPlusLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 800px;
  width: 100%;
  padding-bottom: 60px;
`;

export const Link = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap:3px;
  position: absolute;
  right: -15px;
  top: 22px;
  color: #EB8F00;
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoM00['font-family']};
  font-size: 16px;

  &:hover ${LinkImg} {
    transform: rotate(-30deg);
  }

  @media (max-width: 400px) {
    right: 50%;
    transform: translateX(50%);
    margin-top:20px;
  }
`;

export const IntroLine = styled.div`
  width: 3px;
  height: 20px;
  background-color: #5F5F5F;
  border-radius: 10px;
`;

export const Intro = styled.div`
  width: 70%;
  text-align:left;
  display:flex;
  font-size: 16px;
  color: #2A2A2A;
  flex-direction:row;
  align-items:flex-end;
  margin-left:10px;
  margin-top:20px;
  gap:5px;
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoM00['font-family']};
`;