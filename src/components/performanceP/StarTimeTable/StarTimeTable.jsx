import * as S from "./styled";
import { timeTableData } from "../../../constant/TimeTable/data";
import { TimeSlot } from "./TimeSlot";
import { BottomTimeSlot } from "./BottomTimeSlot";
import { useRef, useEffect } from "react";

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
  const startTime = new Date("2024-01-01T12:30:00"); // 시작
  const endTime = new Date("2024-01-01T18:30:00"); // 종료

  for (
    let time = startTime;
    time <= endTime;
    time.setMinutes(time.getMinutes() + 30)
  ) {
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    slots.push(`${hours}:${minutes}`); // "HH:MM" 형식
  }
  return slots;
};

export const StarTimeTable = ({ selectedId, onDetailClick }) => {
  const groupedData = groupByTime(timeTableData);
  const timeSlots = generateTimeSlots();

  const slotRefs = useRef({});

  useEffect(() => {
    if (selectedId) {
      // 선택된 ID에 해당하는 슬롯으로 스크롤
      const targetSlotTime = Object.keys(slotRefs.current).find((time) => {
        const slots = groupedData[time];
        return slots && slots.some((slot) => slot.id === selectedId); // slots가 undefined가 아닌지 확인
      });

      if (targetSlotTime && slotRefs.current[targetSlotTime]) {
        slotRefs.current[targetSlotTime].scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedId, groupedData]);

  return (
    <S.Container>
      {timeSlots.map((time, index) => (
        <S.TimeSlotWrapper
          key={index}
          ref={(el) => (slotRefs.current[time] = el)}
          style={{
            backgroundColor: groupedData[time]?.some(
              (slot) => slot.id === selectedId
            )
              ? "#FFEADA"
              : "transparent",
          }}
        >
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
                  DetailBtnClick={onDetailClick}
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
