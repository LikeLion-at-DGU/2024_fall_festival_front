import styled from "styled-components";

export const Container = styled.div`
  width: 103%;
  text-align: center;
  margin: 0 0 0.9375rem;
  border-left: solid 1.2px #ffba85;
  border-right: solid 1px #ffba85;

  overflow: hidden;
`;
export const i = styled.div``;

export const SlideItem = styled.div`
  /* box-sizing: border-box; */
  display: flex;
  align-items: center;
  width: 95%;
  height: 150px;
  text-align: center;
  margin: 0 auto;
  border-radius: 1rem;
  border: 1px solid #ffba85;
  background: #fff;
  /* 슬라이드 콘텐츠 예시 */
`;

export const SlideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  max-width: 800px;
  /* 전체 슬라이드 크기를 제한하여 잘리지 않게 설정 */
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;
export const Club = styled.div`
  display: flex;
  width: 100%;
  gap: 7px;
`;

export const ClubImage = styled.div`
  display: flex;

  width: 55px;
  height: 55px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
export const ClubDefaultImage = styled.div`
  display: flex;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;
export const ClubName = styled.div`
  display: flex;
  min-width: 55px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
  ${({ theme }) => theme.fonts.AppleSDGothicNeoR00};
  font-size: 10px;
  color: #000;
  button {
    display: flex;
    width: 43.2px;
    height: 10.8px;
    justify-content: center;
    align-items: center;
    border-radius: 4.5px;
    background: #5a5a5a;
    font-size: 7px;
    color: #fff;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
  width: 100%;
  ${(props) =>
    props.star &&
    `
    align-items: center;
  `}
`;
export const InfoContent = styled.div`
  display: flex;
  gap: 4px;
  ${({ theme }) => theme.fonts.AppleSDGothicNeoR00};
  color: #000;
  font-size: 9.5px;
  //연예인슬라이드 공연시간이랑 장소 멘트 가로길이 맞추기위함
  ${(props) =>
    props.star &&
    `
    min-width: 110px;
  `}
  img {
    display: flex;
    width: 10px;
    height: 12px;
  }
  .Title {
    display: flex;
    justify-content: flex-start;
    min-width: 50px;
    ${({ theme }) => theme.fonts.AppleSDGothicNeoM00};
    font-size: 9.5px;
    color: #ed6308;
  }
  .Location {
    display: flex;
    text-align: center;
    gap: 8px;
  }
  .locText {
    display: flex;
    align-items: center;
    text-align: center;
  }
`;
//동아리 슬라이드 중앙에만 들어가는 세로구분선
export const VerticalLine = styled.div`
  /* position: absolute; */

  height: 90%;
  width: 1px;
  background-color: #ffba85;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

//연예인 슬라이드 디자인

//반복되는 연예인 사진+이름 묶는 박스
export const StarMap = styled.div`
  display: flex;
  gap: 7px;

  .profile {
    display: flex;
    flex-direction: column;
    gap: 5.2px;
  }
  .starName {
    display: flex;
    justify-content: center;
    ${({ theme }) => theme.fonts.AppleSDGothicNeoR00};
    color: #000;
    font-size: 9.5px;
  }
`;

export const StarImage = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
export const StarDefaultImage = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;
