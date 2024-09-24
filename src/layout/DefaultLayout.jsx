import { Outlet, useLocation } from "react-router-dom";
import { useState } from 'react';
import styled from "styled-components";
import { Header } from "../components/Header/Header";
import { DateBar } from "../components/Header/DateBar";
import ScrollObserver from "./ScrollObserver";

export const DefaultLayout = () => {
  const location = useLocation(); // 현재 경로를 가져옴
  const [isVisible, setIsVisible] = useState(true);
  const hideDateBar = location.pathname === "/notice" || location.pathname === "/about";

  return (
    <>
      <Wrapper>
        <Header/>
          {!hideDateBar && <DateBar isVisible={isVisible} />} {/* 조건부로 DateBar 렌더링 */}
          <Content isVisible={!hideDateBar && isVisible}> {/* isVisible 값에 따라 margin-top 변경 */}
            <Outlet />
          </Content>
        <ScrollObserver onScroll={setIsVisible} /> {/* 스크롤 감지 훅 */}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
`;

const Content = styled.div`
  margin-top: ${({ isVisible }) => (isVisible ? "47px" : "0px")}; /* DateBox 높이만큼 조정 */
  transition: margin-top 0.3s ease-in-out;
`;