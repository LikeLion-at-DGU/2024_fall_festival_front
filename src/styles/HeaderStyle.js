import styled, { createGlobalStyle } from "styled-components";
import Header_bg from "../assets/images/Header_bg.png"

export const HeaderTitle = styled.h1 `
font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoH00['font-family']};
font-weight: 400;
`;

export const HeaderP = styled.p`
${({ theme }) => theme.fonts.AppleSDGothicNeoR00};
display : flex;
align-items: flex-end;
line-height: 0.8;
`

export const Header = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 2;

  flex-direction: row;
  align-items: center;
  background-image: url(${Header_bg});
  background-size: cover;

  height: 56px;
  width: 100%;
  max-width: 540px;

  h1{
    color: #FFF;
    font-size: 25px;

  }

  p{
    color: #FFF;
    font-size: 13px;
  }
`

export const TextBox = styled.div`
    display: flex;
    height: 40px;
    align-items: flex-end;
    padding: 10px;
    gap: 5px;
`

export const DateBox = styled.div`
  display: flex;
  position: fixed;
  top: 56px; /* 고정된 위치 */
  z-index: 1;
  background-color: #FFF;
  height: 47px;
  width: 100%;
  max-width: 540px;
  gap: 6.65px;
  padding: 7px 13px;
  transition: transform 0.3s ease-in-out; /* 애니메이션 추가 */

  /* DateBox가 보일 때는 제자리, 보이지 않을 때는 화면 위로 숨김 */
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(-100%)")};
`;

export const DateButton = styled.button`
  width: 68.4px;
  height: 29.45px;
  padding: 8px 0 5px 0;
  font-family: 'AppleSDGothicNeoB00';
  font-size: 14.079px;

  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? '#FF6601' : '#B6B6B6')};
  background: ${({ isSelected }) => (isSelected ? '#FFF3EA' : 'transparent')};
  border-radius: 5px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #f0f0f0;
  }
`;