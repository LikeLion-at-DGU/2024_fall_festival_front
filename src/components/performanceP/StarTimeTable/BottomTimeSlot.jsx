import * as S from "./styled";
import { StarLineUp } from "../../../constant/TimeTable/data";
import { TimeSlot } from "./TimeSlot";
import Icon from "../../../assets/images/locationIcon.svg";

export const BottomTimeSlot = () => {
  return (
    <S.BottomTimeSlotWrapper>
      <S.TimeSlot style={{ alignItems: "start" }}>
        <div className="BottomTimeContainr">
          <S.Time style={{ marginTop: "2rem" }}>19:00</S.Time>
          <S.Time style={{ top: "90%" }}>21:30</S.Time>
        </div>
        <div className="CicleLine">
          <S.BottomLine />
          <S.Circle style={{ top: "10%" }} />
          <S.Circle style={{ top: "90%" }} />
        </div>
      </S.TimeSlot>
      <S.StarPerformance>
        <S.BottomTimeSlot>
          <div id="bottomTitle">연예인 공연</div>
          <S.Location>
            <img src={Icon} />
            <div className="locationName">대운동장</div>
          </S.Location>
        </S.BottomTimeSlot>

        <S.TimeSlotContainer style={{ marginTop: "1rem" }}>
          {StarLineUp.map((item, idx) => (
            <TimeSlot key={idx} name={item.star} starImg={item.starImg} />
          ))}
        </S.TimeSlotContainer>
      </S.StarPerformance>
    </S.BottomTimeSlotWrapper>
  );
};
