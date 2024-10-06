import styled, { keyframes } from "styled-components";

// 낙엽이 좌우로 크게 흔들리며 자연스럽게 아래로 떨어지는 애니메이션 정의
const fallAnimation = keyframes`
  0% {
    transform: translateX(0px) translateY(0px) rotate(0deg);
  }
  10% {
    transform: translateX(5px) translateY(20px) rotate(10deg);
  }
  20% {
    transform: translateX(-10px) translateY(50px) rotate(-20deg);
  }
  30% {
    transform: translateX(7px) translateY(80px) rotate(30deg);
  }
  40% {
    transform: translateX(-5px) translateY(110px) rotate(-40deg);
  }
  50% {
    transform: translateX(10px) translateY(130px) rotate(50deg);
  }
  60% {
    transform: translateX(-7px) translateY(150px) rotate(-60deg);
  }
  70% {
    transform: translateX(5px) translateY(170px) rotate(40deg);
  }
  80% {
    transform: translateX(-3px) translateY(185px) rotate(-20deg);
  }
  90% {
    transform: translateX(2px) translateY(195px) rotate(10deg);
  }
  100% {
    transform: translateX(0px) translateY(200px) rotate(0deg);
    opacity: 0;
  }
`;

export const MainLogo = styled.img`
  width: 75px;
  cursor: pointer;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 120px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #ffefe3 0%, #fff 100%);
`;

export const MainText = styled.div`
  color: #ffba85;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Leaves = styled.img`
  position: absolute;
  top: -50px;
  left: ${(props) => props.$left}; // transient prop로 변경
  width: ${(props) => props.$size}px; // props 사용 시에도 transient로 변경
  height: auto;
  opacity: 1;

  animation: ${fallAnimation} ${(props) => props.$duration} ease-in-out
    ${(props) => props.$delay} infinite;
`;
