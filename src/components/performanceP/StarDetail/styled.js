import styled, { keyframes } from "styled-components";
const slideUp = keyframes`
  0% {
    transform: translateY(100%);

  }
  100% {
    transform: translateY(0);
  }
`;
export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 68%;
  background-color: #fff;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.7);
  z-index: 10;
  padding-bottom: 0.5rem;

  animation: ${slideUp} 0.5s ease-out forwards;
`;
export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 15px;
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .StarName {
    color: #000;
    text-align: center;
    ${({ theme }) => theme.fonts.AppleSDGothicNeoB00};

    font-size: 15px;
  }
`;

export const CloseBtn = styled.img`
  cursor: pointer;
`;
export const StarDetailImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
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
  background-color: ${(props) =>
    props.index === 2 ? "#ffe3e3" : props.index === 3 ? "#FFEADA" : "FFE1DA"};
  color: ${(props) =>
    props.index === 2 ? "#ED6308" : props.index === 3 ? "#ED3F08" : "000"};

  border-radius: ${(props) =>
    props.index === 2 || props.index === 3 ? "5px" : "0"};
  padding: ${(props) =>
    props.index === 2 || props.index === 3 ? "0.2rem" : "0"};

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
