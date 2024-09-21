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
export const BottomTimeSlotWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  width: 100%;
  height: 400px;
  gap: 10px;
`;
export const TimeSlotContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const TimeSlot = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  gap: 1rem;

  .CicleLine {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .BottomTimeContainr {
    display: flex;
    flex-direction: column;
    height: 368px;
    justify-content: space-between;
  }
`;
export const BottomTimeSlot = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 10px;
  padding-left: 1rem;
  #bottomTitle {
    color: #000;
    font-size: 1rem;
    ${({ theme }) => theme.fonts.AppleSDGothicNeoM00};
  }
`;
export const Time = styled.div`
  width: 30px;
  font-size: 14px;
  color: #000;
  text-align: center;
  ${({ theme }) => theme.fonts.AppleSDGothicNeoR00};
  font-size: 10px;
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
  border: 1px solid #5f5f5f;
`;
export const BottomLine = styled.div`
  width: 1px;
  height: 400px;
  border: 1px solid #5f5f5f;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
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
  ${({ theme }) => theme.fonts.AppleSDGothicNeoR00};
  font-size: 12px;
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
    ${({ theme }) => theme.fonts.AppleSDGothicNeoR00};
    font-size: 12px;
  }
`;

export const DetailsButton = styled.button`
  display: flex;
  width: 55px;
  height: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  color: white;
  text-align: center;
  background: #5a5a5a;
  font-size: 8px !important;
  ${({ theme }) => theme.fonts.AppleSDGothicNeoR00};
  line-height: 30px;

  cursor: pointer;
`;
export const StarPerformance = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
