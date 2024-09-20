import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/Header/Header";
import { DateBar } from "../components/Header/DateBar";

export const DefaultLayout = () => {
  return (
    <>
      <Wrapper>
        <Header/>
        <DateBar/>
        <Outlet />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
`;
