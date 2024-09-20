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
  border-bottom: 1px solid #ffba85;
  padding: 10px 0;
  gap: 10px;
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
  font-size: 0.8rem;
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
  gap: 10px;

  .locationName {
    color: #000;
    font-family: "AppleSDGothicNeoR00";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const DetailsButton = styled.button`
  display: flex;
  width: 70px;
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
