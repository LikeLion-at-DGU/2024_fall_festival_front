import * as S from "./styled";
import { timeTableData } from "../../../constant/TimeTable/data";
import { TimeSlot } from "./TimeSlot";

const groupByTime = (data) => {
  return data.reduce((acc, slot) => {
    const { time } = slot;
    if (!acc[time]) {
      acc[time] = [];
    }
    acc[time].push(slot);
    return acc;
  }, {});
};

export const StarTimeTable = () => {
  const groupedData = groupByTime(timeTableData);
  return (
    <S.Container>
      {Object.entries(groupedData).map(([time, slots], index) => (
        <S.TimeSlotWrapper key={index}>
          <S.TimeSlot>
            <S.Time>{time}</S.Time>
            <div className="CicleLine">
              <S.Line />
              <S.Circle />
            </div>
          </S.TimeSlot>

          <S.TimeSlotContainer>
            {slots.map((slot, idx) => (
              <TimeSlot
                key={idx}
                time={slot.time}
                name={slot.name}
                location={slot.location}
                starImg={slot.starImg}
              />
            ))}
          </S.TimeSlotContainer>
        </S.TimeSlotWrapper>
      ))}
    </S.Container>
  );
};
