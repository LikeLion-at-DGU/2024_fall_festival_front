import styled, { keyframes } from "styled-components";

const slideInUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOutDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;
export const DetailWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 540px;
  height: 400px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
  /* Firefox */
  scrollbar-width: none;

  /* Internet Explorer 10+, Edge */
  -ms-overflow-style: none;

  background-color: #fff;
  padding: 1.5rem 1.75rem;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.7);
  z-index: 30;

  animation: ${({ $isVisible }) => ($isVisible ? slideOutDown : slideInUp)}
    0.75s ease-out;

  /* @media (max-width: 375px) {
    height: 80%;
  } */
`;
export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  .BoothName {
    color: #000;
    text-align: center;
    ${({ theme }) => theme.fonts.AppleSDGothicNeoB00};

    font-size: 15px;
  }
`;

export const tagContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 10px;

  .tag {
    display: inline-block;
    min-width: 35px;
    border-radius: 5px;
    padding: 3px 3px;
    text-align: center;
    font-family: ${({ theme }) =>
      theme.fonts.AppleSDGothicNeoL00["font-family"]};
    font-size: 10px;
  }

  .tag:nth-child(1) {
    background-color: #d4eaff;
    color: #00326d;
  }
  .tag:nth-child(2) {
    background-color: #ffd5d5;
    color: #f00;
  }
  .tag:nth-child(3) {
    background-color: #ffd9a1;
    color: #db4200;
  }
`;
export const CloseBtn = styled.img`
  cursor: pointer;
  margin-left: auto;
`;
export const imgWrapper = styled.div`
  display: flex;
  position: relative;
`;
export const BoothDetailImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;
export const imgCount = styled.div`
  display: flex;
  width: 27.463px;
  height: 15.152px;
  padding: 7px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  background-color: #fff;
  z-index: 2;
  position: absolute;
  right: 10px;
  top: 10px;
`;
export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  .InfoContainer {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .InfoWrapper {
    display: flex;
    flex-direction: column;
  }
`;

export const DetailTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 20%;
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoB00["font-family"]};
  font-size: 12px;
`;
export const DetailContext = styled.div`
  display: flex;
  background-color: ${(props) => (props.index === 5 ? "#ffe3e3" : "FFE1DA")};
  color: ${(props) => (props.index === 5 ? "#ED6308" : "000")};

  border-radius: ${(props) => (props.index === 5 ? "5px" : "0")};
  padding: ${(props) => (props.index === 5 ? "0.2rem" : "0")};

  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoR00["font-family"]};
  font-size: 10px;
`;
export const Divider = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  margin-top: 6px;
  background-color: #b6b6b6;
`;
export const tabling = styled.img`
  display: flex;
  width: 100%;

  gap: 10px;
  border-radius: 5.25px;
  background: #e9ff99;
  object-fit: cover;
  margin-bottom: 10px;
  margin-top: 20px;
`;
