import styled from "styled-components";

export const Container = styled.div`
  width: 103%;
  text-align: center;
  /* padding: 0 0 0.9375rem; */
  margin: 0 0 0.9375rem;
  border-left: solid 1.1px #ffba85;
  border-right: solid 1px #ffba85;
  ${({ theme }) => theme.fonts.AppleSDGothicNeoB00};
  overflow: hidden; /* 필요시 추가 */
`;
export const i = styled.div``;

export const SlideItem = styled.div`
  /* box-sizing: border-box; */
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 129px;
  text-align: center;
  margin: 0 auto;
  border-radius: 1rem;
  border: 1px solid #ffba85;
  background: #fff;
  /* 슬라이드 콘텐츠 예시 */
`;
