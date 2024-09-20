import styled, { createGlobalStyle } from "styled-components";
import Header_bg from "../assets/images/Header_bg.png"
import AppleSDGothicNeoH from "../assets/fonts/AppleSDGothicNeoH.ttf"
import AppleSDGothicNeoB from "../assets/fonts/AppleSDGothicNeoB.ttf"
import AppleSDGothicNeoL from "../assets/fonts/AppleSDGothicNeoL.ttf";


export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'AppleSDGothicNeoH';
    src: url(${AppleSDGothicNeoH}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'AppleSDGothicNeoB';
    src: url(${AppleSDGothicNeoB}) format('truetype');
    font-weight: 100; 
    font-style: normal;
  }
  @font-face {
    font-family: 'AppleSDGothicNeoL';
    src: url(${AppleSDGothicNeoL}) format('truetype');
    font-weight: 100; 
    font-style: normal;
  }
  h1{
    font-family: 'AppleSDGothicNeoH';
    font-weight: normal;
  }
  `

export const Header = styled.div`
  display: flex;
  background-image: url(${Header_bg});
  background-size: cover;
  height: 56px;
  align-items: center;

  padding: 16px;

  h1{
    color: #FFF;
    font-size: 25px;
    font-weight: 100;
  }

  p{
    color: #FFF;
    font-size: 13px;
  }
`

export const TextBox = styled.div`
    display: flex;
    gap: 5px;
`

export const DateBox = styled.div`
    display: ${({isVisible}) => (isVisible ? 'flex' : 'none' )};
    height: 47px;
    gap: 6.65px;
    padding: 9px 16px;
`
export const DateButton = styled.button`
  width: 68.4px;
  height: 29.45px;
  padding: 6px 0 5px 0;


  font-family: 'AppleSDGothicNeoB';
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