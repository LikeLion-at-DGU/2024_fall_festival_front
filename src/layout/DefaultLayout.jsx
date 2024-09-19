import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const DefaultLayout = () => {
  return (
    <>
      <Wrapper>
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
