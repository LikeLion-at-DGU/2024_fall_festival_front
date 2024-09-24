import React from "react";
import * as S from "./Styled";
import Ping from "../../../assets/images/ping.svg";
const SlideContent = ({ events }) => {
  const isSingleEvent = events.length === 1; // 이벤트가 1개인지 2개인지 확인
  const eventType = events[0].type;

  // "동아리"와 "연예인"일 때 다른 구조를 반환
  if (eventType === "동아리") {
    return (
      <S.i>
        <S.SlideItem>
          {events.map((event, idx) => (
            <>
              <S.SlideBox isSingle={isSingleEvent}>
                {/* "동아리"일 때 */}
                <S.Content key={event.id}>
                  <S.Club>
                    <S.ClubImage>
                      {event.starImg ? (
                        <img src={event.starImg} alt={event.name} />
                      ) : (
                        <S.ClubDefaultImage /> // 이미지가 없을 경우 기본 회색 원
                      )}
                    </S.ClubImage>
                    <S.ClubName>
                      {event.name}
                      <button>상세보기</button>
                    </S.ClubName>
                  </S.Club>
                  <S.Info>
                    <S.InfoContent>
                      <div class="Title">공연시간</div>
                      <div>
                        {event.startTime}-{event.endTime}
                      </div>
                    </S.InfoContent>
                    <S.InfoContent>
                      <div class="Title">장소</div>
                      <div class="Location">
                        <img src={Ping} alt={"위치 아이콘"} />
                        {event.location}
                      </div>
                    </S.InfoContent>
                  </S.Info>
                </S.Content>
              </S.SlideBox>
              {/*슬라이드안에 같은 형식을 두번 반복하는데 첫번째반복때만 가운데선 표시 */}
              {!isSingleEvent && idx === 0 && <S.VerticalLine />}
            </>
          ))}
        </S.SlideItem>
      </S.i>
    );
  } else {
    {
      /* "연예인"일 때*/
    }
    return (
      <S.i>
        <S.SlideItem>
          <S.SlideBox>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <S.StarMap>
                {events.map((event) => (
                  <div class="profile" key={event.id}>
                    <S.StarImage>
                      {event.starImg ? (
                        <img src={event.starImg} alt={event.name} />
                      ) : (
                        <S.StarDefaultImage /> // 이미지가 없을 경우 기본 회색 원
                      )}
                    </S.StarImage>
                    <div class="starName">{event.name}</div>
                  </div>
                ))}
              </S.StarMap>
              <S.Info star>
                <S.InfoContent star>
                  <div class="Title">공연시간</div>
                  <div>{events[0].startTime}- ??:00</div>
                </S.InfoContent>
                <S.InfoContent star>
                  <div class="Title">장소</div>
                  <div class="Location">
                    <img src={Ping} alt={"위치 아이콘"} />
                    {events[0].location}
                  </div>
                </S.InfoContent>
              </S.Info>
            </div>
          </S.SlideBox>
        </S.SlideItem>
      </S.i>
    );
  }
};

export default SlideContent;
