import * as S from "./styled";
import { timeTableData } from "../../../constant/TimeTable/data";
import { TimeSlot } from "./TimeSlot";

export const StarTimeTable = () => {
  return (
    <S.Container>
      {timeTableData.map((slot, index) => (
        <TimeSlot
          key={index}
          time={slot.time}
          name={slot.name}
          location={slot.location}
          starImg={slot.starImg}
        />
      ))}
    </S.Container>
  );
};
