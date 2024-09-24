import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 1.3rem;
  align-self: center;
  align-items: center;
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
    ${({ theme }) => theme.fonts.AppleSDGothicNeoR00};
    font-size: 10px;
  }
`;
export const StarTimeTableContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 600px;
  @media (max-width: 375px) {
    /* SE  */
    height: 380px;
  }

  ::-webkit-scrollbar {
    width: 0;
  }

  scrollbar-width: none;
`;
