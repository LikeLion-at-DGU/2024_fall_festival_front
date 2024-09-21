import * as S from "./styled";
import { timeTableData } from "../../../constant/TimeTable/data";
import { TimeSlot } from "./TimeSlot";
import { BottomTimeSlot } from "./BottomTimeSlot";
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

const generateTimeSlots = () => {
  const slots = [];
  const startTime = new Date("2024-01-01T12:30:00"); // 시작 시간
  const endTime = new Date("2024-01-01T18:30:00"); // 종료 시간

  for (
    let time = startTime;
    time <= endTime;
    time.setMinutes(time.getMinutes() + 30)
  ) {
    const hours = String(time.getHours()).padStart(2, "0"); // 시
    const minutes = String(time.getMinutes()).padStart(2, "0"); // 분
    slots.push(`${hours}:${minutes}`); // "HH:MM" 형식으로 추가
  }
  return slots;
};

export const StarTimeTable = () => {
  const groupedData = groupByTime(timeTableData);
  const timeSlots = generateTimeSlots();
  return (
    <S.Container>
      {timeSlots.map((time, index) => (
        <S.TimeSlotWrapper key={index}>
          <S.TimeSlot>
            <S.Time>{time}</S.Time>
            <div className="CicleLine">
              <S.Line />
              <S.Circle />
            </div>
          </S.TimeSlot>

          <S.TimeSlotContainer>
            {groupedData[time] ? (
              groupedData[time].map((slot, idx) => (
                <TimeSlot
                  key={idx}
                  time={slot.time}
                  name={slot.name}
                  location={slot.location}
                  starImg={slot.starImg}
                />
              ))
            ) : (
              // 데이터가 없을 경우 빈 공간을 남김
              <></>
            )}
          </S.TimeSlotContainer>
        </S.TimeSlotWrapper>
      ))}
      <BottomTimeSlot />
    </S.Container>
  );
};
