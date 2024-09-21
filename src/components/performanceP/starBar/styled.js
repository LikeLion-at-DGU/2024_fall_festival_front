import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const StarWrapper = styled.div`
  display: flex;
  width: 80px;
  height: 90px;
  flex-direction: column;
  align-items: center;
  gap: 5.533px;
`;

export const StarImgDiv = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    margin: 0;
  }
  circle {
    width: 60px;
    height: 60px;
  }
`;
