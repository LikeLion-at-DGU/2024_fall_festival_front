import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  width: 90%;
  gap: 1.3rem;
`;
export const NoticeBar = styled.div`
  display: flex;
  flex-direction: row;
  height: 32px;
  width: 100%;
  padding-left: 1rem;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;

  flex-shrink: 0;
  border-radius: 6.6px;
  background: #fff3ea;

  #notice {
    color: #ed6308;
    font-family: "AppleSDGothicNeoR00";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
