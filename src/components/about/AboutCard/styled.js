import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;     
  align-items: center;
  justify-content:center;
  gap: 5px;  
`;

export const Card = styled.div`
border-radius: 10px;
border: 0.5px solid #BFBFBF;
background: #FFF;
`

export const Photo = styled.img`
  display: flex;
  border-radius: 10px 10px 0px 0px;
  width: 118px;
  height: 81px;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`
export const Name = styled.div`
  display:flex;
  justify-content: center;
  padding-top:5px;
  color: var(--, #000);
  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundB['font-family']};
  font-size: 14px;
`
export const Department = styled.div`
  display:flex;
  justify-content: center;
  color: var(--, #000);
  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundR['font-family']};
  font-size: 10px;
`

export const Shape = styled.div`
  width: 46px;
  height: 16px;
  border-radius: 5px; 
  position: absolute; 
  left: 31%; 
  top: 15%;
  background: ${({ role }) => {
    switch (role) {
      case "총괄":
        return "#FFD9A1"; 
      case "PD 팀장":
      case "PD 팀원":
        return "#F8F69D"; 
      case "FE 팀장":
      case "FE 팀원":
        return "#FFD5D5"; 
      case "BE 팀장":
      case "BE 팀원":
        return "#C3F3C4";
      case "대외협력 팀장":
      case "대외협력 팀원":
        return "#AFDCF3";
      default:
        return "#FFF";
    }
  }};
  z-index: -1; 

  ${({ role }) => {
    if (role === "대외협력 팀장" || role === "대외협력 팀원") {
      return `
        width: 65px;
        height: 16px;
        position: absolute; 
        left: 23%; 
        top: 15%;
      `;
    } else if (role === "총괄") {
      return `
        width: 38px;
        height: 16px; 
        position: absolute; 
        left: 34%; 
        top: 15%;
      `;
    }
    return null;
  }}
`;

export const Role = styled.div`
  position: relative; 
  display: flex;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundR['font-family']};
  font-size: 10px;
  color: ${({ role }) => {
    switch (role) {
      case "총괄":
        return "#DB4200"; 
      case "PD 팀장":
      case "PD 팀원":
        return "#785500"; 
      case "FE 팀장":
      case "FE 팀원":
        return "#F00"; 
      case "BE 팀장":
      case "BE 팀원":
        return "#00A303";
      case "대외협력 팀장":
      case "대외협력 팀원":
        return "#0000FD";
      default:
        return "#FFF";
    }
  }};
  padding: 5px;
  z-index: 1;
`;

export const Intro = styled.div`
  width: 70%;
  text-align:left;
  margin-bottom:10px;
  margin-left:10px;
  display:flex;
  font-size: 16px;
  color: #2A2A2A;
  flex-direction:row;
  align-items:flex-end;
  gap:5px;
  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundB['font-family']};
`;

export const IntroLine = styled.div`
  width: 3px;
  height: 20px;
  background-color: #5F5F5F;
  border-radius: 10px;
`;