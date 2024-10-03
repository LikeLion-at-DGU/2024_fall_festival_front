import styled, { keyframes } from "styled-components";

// 애니메이션 정의 (왼쪽 아래에서 위로 올라가고 사라지는 효과)
const fireFlyUp = keyframes`
  0% {
    bottom: 0;
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  100% {
    bottom: 80%;
    opacity: 0;
    transform: translateX(-30px) scale(1.5); /* 좌우로 흔들리며 올라가도록 설정 */
  }
`;
// Fire 애니메이션 정의 (왼쪽 아래에서 위로 올라가면서 사라짐)
export const FireAnimation = styled.img`
  position: fixed;
  right: 25px;
  bottom: 0;
  width: 50px;
  height: 50px;
  animation: ${fireFlyUp} 2s ease-in-out forwards;
`;

// 불 이모지 애니메이션 정의 (오른쪽 아래에서 위로 올라가면서 사라짐)
export const Fire = styled.div`
  position: fixed;
  right: ${(props) => props.left}%; /* 랜덤한 x 좌표 */
  bottom: 0;
  width: ${(props) => props.size}px; /* 랜덤한 크기 */
  height: ${(props) => props.size}px;
  animation: ${fireFlyUp} ${(props) => props.duration}s ease-in-out forwards;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
  }
`;
//export const A=styled.div``;
export const Container = styled.div`
  display: flex;
  width: 100%;
`;
export const Contents = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .comment {
    ${({ theme }) => theme.fonts.AppleSDGothicNeoR00};
    color: #000;
    line-height: 25px;
  }
`;
export const FireBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* pointer-events: ${(props) =>
    props.isClicked ? "none" : "auto"}; 한 번 클릭하면 더 이상 클릭 불가 */
  img {
    width: 23px; /* 아이콘 크기 조정 */
    height: 23px; /* 아이콘 크기 조정 */
    object-fit: contain;
    vertical-align: middle; /* 텍스트와 이미지의 수직 정렬 */
  }

  .FireCount {
    display: flex;
    align-items: center;
    font-size: 14px; /* 텍스트 크기 조정 */
    text-align: center;
    ${({ theme }) => theme.fonts.AppleSDGothicNeoB00};
    color: ${(props) =>
      props.isClicked ? "#ED6308" : "#b6b6b6"}; /* 클릭 상태에 따라 색상 변경 */
    line-height: 25px; /* 이미지와 같은 높이로 설정 */
    &:hover {
      color: #ed6308; /* 호버 시 색상 변경 */
    }
  }
`;
