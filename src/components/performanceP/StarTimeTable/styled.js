import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const TimeSlotWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #ffba85;
  padding: 10px 0;
  gap: 10px;
`;

export const TimeSlotContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* 가로로 나열하되 공간 부족 시 다음 줄로 넘어가게 */
  gap: 20px; /* TimeSlot 간의 간격 */
`;
export const TimeSlot = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  gap: 5px;

  .CicleLine {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Time = styled.div`
  width: 30px;
  font-size: 14px;
  color: #000;
  text-align: center;
  font-family: "AppleSDGothicNeoR00";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #5f5f5f;
  position: absolute;
  z-index: 2;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

export const Line = styled.div`
  width: 1px;
  height: 90px;
  border: 1px solid #5f5f5f; /* 작대기 색상 */
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const ImagePlaceholder = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 45.903px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const StarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Name = styled.div`
  color: #000;
  font-family: "AppleSDGothicNeoR00";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Location = styled.div`
  font-size: 14px;
  color: #666;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  .locationName {
    color: #000;
    font-family: "AppleSDGothicNeoR00";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const DetailsButton = styled.button`
  display: flex;
  width: 60px;
  height: 15px;
  padding: 0.974px 7.788px;
  justify-content: center;
  align-items: center;
  gap: 9.735px;
  border-radius: 15px;
  color: white;
  background: #5a5a5a;
  font-size: 10px;
  cursor: pointer;
`;
