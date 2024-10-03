import React, { useState, useEffect, useRef } from "react";
import * as S from "./Styled";
import { RxDoubleArrowDown, RxDoubleArrowUp } from "react-icons/rx";
import { TopBar } from "@components/topBar/TopBar";
import { useBoothData } from "../../hook/useBooth";
import BoothData from "../../../src/boothdata/Boothdata";
import LinenowLogo from "../../assets/images/LinenowLogo.png";
import nonselect_GI from "../../assets/images/nonselect_GI.png";
import nonselect_JU from "../../assets/images/nonselect_JU.png";
import select_GI from "../../assets/images/select_GI.png";
import select_JU from "../../assets/images/select_JU.png";

export const BoothPage = () => {
  const { boothData } = useBoothData();
  console.log("boothData:", boothData);
  // 초기 날짜 선택 용
  const [selectedDate, setSelectedDate] = useState("10/7(월)");

  // 부스 리스트를 띄울 지 말지
  const [isBoothListOpen, setIsBoothListOpen] = useState(true);

  // 부스 필터링 용
  const [selectedTime, setSelectedTime] = useState("시간");
  const [selectedType, setSelectedType] = useState("유형");
  const [selectedLocation, setSelectedLocation] = useState("위치");
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    time: false,
    type: false,
    location: false,
  });

  // 부스 디테일 띄우는 용
  const [selectBooth, setSelectBooth] = useState(null);

  // 위치보기나 아이콘 클릭시 띄우는 용
  const [highlightedBooth, setHighlightedBooth] = useState(null);

  // 마킹 용 배열
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const [activeMarker, setActiveMarker] = useState(null);

  const toggleDropdown = (type) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  const handleSelect = (type, value) => {
    if (type === "time") setSelectedTime(value);
    if (type === "type") setSelectedType(value);
    if (type === "location") setSelectedLocation(value);

    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [type]: prevState[type], // 선택 후 필터를 닫는 겁니다아
    }));
  };

  const resetFilters = (e) => {
    setSelectedTime("시간");
    setSelectedType("유형");
    setSelectedLocation("위치");

    const button = e.currentTarget;

    button.style.transform = "rotate(0deg)";
    button.style.transition = "none";

    setTimeout(() => {
      button.style.transition = "transform 1s ease";
      button.style.transform = "rotate(-360deg)";
    }, 10);
  };

  // 부스 위치 버튼 클릭시 ! - 나중에 카카오맵에서 해당 위치를 카카오 맵에 띄우기
  const handleBoothLocation = (boothId) => {
    const booth = BoothData.find((booth) => booth.id === boothId);
    setHighlightedBooth(booth);
  };

  // 날짜 선택 용
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // 부스 리스트 선택하기
  const toggleBoothList = () => {
    setIsBoothListOpen(!isBoothListOpen);
  };

  // 부스 디테일 표시 용
  const handleSelectBooth = (booth) => {
    setSelectBooth(booth);
    setHighlightedBooth(booth);
  };

  const filteredBooths = BoothData.filter((booth) => {
    const timeMatch =
      selectedTime === "시간" || booth.filters.time === selectedTime;
    const typeMatch =
      selectedType === "유형" || booth.filters.type === selectedType;
    const locationMatch =
      selectedLocation === "위치" ||
      booth.filters.location === selectedLocation;

    // 모든 필터 조건을 만족하는 부스만 반환
    return timeMatch && typeMatch && locationMatch;
  });

  // 부스 유형에 따른 초기 마커 이미지 설정 함수
  const getInitialMarkerImage = (booth) => {
    let markerImage =
      booth.filters.type === "주점" ? nonselect_JU : nonselect_GI;

    return new window.kakao.maps.MarkerImage(
      markerImage,
      new window.kakao.maps.Size(30, 36)
    );
  };

  // 카카오맵 마커 생성
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=972351b156b1bdfe825cb095c12d1e56&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5567, 127.0003),
          level: 3,
        };
        mapRef.current = new window.kakao.maps.Map(container, options);

        // 초기 마커 생성
        filteredBooths.forEach((booth) => {
          const markerPosition = new window.kakao.maps.LatLng(
            booth.latitude,
            booth.longitude
          );
          const markerImage = getInitialMarkerImage(booth); // 유형에 따라 초기 마커 이미지 설정
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage,
            map: mapRef.current,
          });

          // 마커 클릭 이벤트 설정
          window.kakao.maps.event.addListener(marker, "click", () => {
            handleBoothLocation(booth.id); // 부스 선택
          });

          // 마커 정보를 ref 배열에 저장
          markersRef.current.push({ boothId: booth.id, marker });
        });
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // 선택된 부스에 따라 마커 이미지 변경
  useEffect(() => {
    // 선택된 부스가 없으면 모든 마커를 초기화
    if (!highlightedBooth) {
      markersRef.current.forEach(({ marker, boothId }) => {
        const booth = BoothData.find((b) => b.id === boothId); // 해당 부스 데이터 찾기
        if (booth) {
          // 초기 마커 이미지로 변경
          const initialImage = getInitialMarkerImage(booth);
          marker.setImage(initialImage);
        }
      });
      return;
    }

    if (highlightedBooth && mapRef.current) {
      // 선택된 부스의 위치 좌표로 맵의 중심 이동
      const newCenter = new window.kakao.maps.LatLng(
        highlightedBooth.latitude - 0.0017,
        highlightedBooth.longitude
      );
      mapRef.current.setCenter(newCenter);
    }

    // 선택된 부스가 있을 경우, 해당 마커만 업데이트
    markersRef.current.forEach(({ boothId, marker }) => {
      const isHighlighted = highlightedBooth && highlightedBooth.id === boothId;

      // 선택된 부스의 마커를 변경
      if (isHighlighted) {
        let markerImage;
        if (highlightedBooth.filters.type === "주점") {
          markerImage = select_JU; // 선택된 주점일 경우
        } else if (highlightedBooth.filters.type === "기타") {
          markerImage = select_GI; // 선택된 기타일 경우
        } else {
        }
        marker.setImage(
          new window.kakao.maps.MarkerImage(
            markerImage,
            new window.kakao.maps.Size(32, 40)
          )
        );
      } else {
        // 선택되지 않은 부스는 초기 이미지로 유지
        const booth = BoothData.find((b) => b.id === boothId); // 해당 부스 데이터 찾기
        if (booth) {
          const initialImage = getInitialMarkerImage(booth);
          marker.setImage(initialImage);
        }
      }
    });
  }, [highlightedBooth]);

  return (
    <>
      <TopBar />
      <S.MainWrapper>
        {/* 상단 날짜 선택 버튼 */}
        <S.Header>
          <S.DateSelector>
            <S.DateButton
              $active={selectedDate === "10/7(월)"}
              onClick={() => handleDateChange("10/7(월)")}
            >
              10/7(월)
            </S.DateButton>
            <S.DateButton
              $active={selectedDate === "10/8(화)"}
              onClick={() => handleDateChange("10/8(화)")}
            >
              10/8(화)
            </S.DateButton>
          </S.DateSelector>
        </S.Header>

        {/* 카카오맵 자리 */}
        <S.MapPlaceholder id="map">
          여기에 카카오맵이 들어갑니다.
        </S.MapPlaceholder>

        {/* 부스 리스트 */}
        <S.BoothListWrapper $isOpen={isBoothListOpen}>
          <S.BoothListHeader onClick={toggleBoothList}>
            <S.Arrow>
              {isBoothListOpen ? <RxDoubleArrowDown /> : <RxDoubleArrowUp />}
            </S.Arrow>
          </S.BoothListHeader>

          {/* 필터 섹션 (부스 리스트 안에) */}
          <S.FilterWrapper>
            <S.Filters>
              <S.FilterItem
                selected={selectedTime !== "시간"}
                $isOpen={isDropdownOpen.time}
                onClick={() => toggleDropdown("time")}
              >
                {selectedTime}
                <S.Arrow2>
                  <S.StyledIoIosArrowDown />
                </S.Arrow2>
                {isDropdownOpen.time && (
                  <S.Dropdown>
                    <S.DropdownItem
                      onClick={() => handleSelect("time", "시간")}
                    >
                      전체
                    </S.DropdownItem>
                    <S.DropdownItem onClick={() => handleSelect("time", "낮")}>
                      낮
                    </S.DropdownItem>
                    <S.DropdownItem onClick={() => handleSelect("time", "밤")}>
                      밤
                    </S.DropdownItem>
                  </S.Dropdown>
                )}
              </S.FilterItem>

              <S.FilterItem
                selected={selectedType !== "유형"}
                $isOpen={isDropdownOpen.type}
                onClick={() => toggleDropdown("type")}
              >
                {selectedType}
                <S.Arrow2>
                  <S.StyledIoIosArrowDown />
                </S.Arrow2>
                {isDropdownOpen.type && (
                  <S.Dropdown>
                    <S.DropdownItem
                      onClick={() => handleSelect("type", "유형")}
                    >
                      전체
                    </S.DropdownItem>
                    <S.DropdownItem
                      onClick={() => handleSelect("type", "푸드트럭")}
                    >
                      푸드트럭
                    </S.DropdownItem>
                    <S.DropdownItem
                      onClick={() => handleSelect("type", "주점")}
                    >
                      주점
                    </S.DropdownItem>
                    <S.DropdownItem
                      onClick={() => handleSelect("type", "기타")}
                    >
                      기타
                    </S.DropdownItem>
                  </S.Dropdown>
                )}
              </S.FilterItem>

              <S.FilterItem
                selected={selectedLocation !== "위치"}
                $isOpen={isDropdownOpen.location}
                onClick={() => toggleDropdown("location")}
              >
                {selectedLocation}
                <S.Arrow2>
                  <S.StyledIoIosArrowDown />
                </S.Arrow2>
                {isDropdownOpen.location && (
                  <S.Dropdown>
                    <S.DropdownItem
                      onClick={() => handleSelect("location", "위치")}
                    >
                      전체
                    </S.DropdownItem>
                    <S.DropdownItem
                      onClick={() => handleSelect("location", "팔정도")}
                    >
                      팔정도
                    </S.DropdownItem>
                    <S.DropdownItem
                      onClick={() => handleSelect("location", "만해광장")}
                    >
                      만해광장
                    </S.DropdownItem>
                  </S.Dropdown>
                )}
              </S.FilterItem>
            </S.Filters>

            {/* 초기화 버튼 */}
            <S.ResetButton onClick={resetFilters}>초기화</S.ResetButton>
          </S.FilterWrapper>

          {/* 부스 리스트 */}
          <S.BoothList $isOpen={isBoothListOpen}>
            <S.NoticeTabling>
              부스 클릭 시 테이블링 예약 링크로 이동 가능합니다.
            </S.NoticeTabling>
            {filteredBooths.length > 0 ? (
              filteredBooths.map((booth) => (
                <S.BoothItem
                  key={booth.id}
                  $isColored={
                    highlightedBooth && highlightedBooth.id === booth.id
                  }
                  onClick={() => handleSelectBooth(booth)}
                >
                  {/* 나중에 좋아요순으로 수정 */}
                  <S.BoothThumbnail src={booth.image} />
                  <S.BoothInfo>
                    <S.BoothWrap>
                      <S.BoothName>{booth.boothName}</S.BoothName>
                    </S.BoothWrap>
                    <S.BoothWho>{booth.owner}</S.BoothWho>
                  </S.BoothInfo>
                  <S.LocationButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBoothLocation(booth.id);
                    }}
                  >
                    <S.StyledFaLocationDot />
                    위치 보기
                  </S.LocationButton>
                </S.BoothItem>
              ))
            ) : (
              <S.NoBooth>현재 운영중인 부스가 없어요!</S.NoBooth>
            )}
          </S.BoothList>
        </S.BoothListWrapper>

        {/* 선택한 부스 디테일 */}
        {selectBooth && (
          <>
            {/* <S.BackgroundOverlay onClick={() => setSelectBooth(null)} /> */}
            <S.BoothDetailWrapper $isVisible={selectBooth}>
              <S.BoothDetailContent>
                <S.CloseButton onClick={() => setSelectBooth(null)}>
                  X
                </S.CloseButton>
                <S.BoothDetailHeader>
                  <S.FilterLeft>
                    <S.BoothDetailName>
                      {selectBooth.boothName}
                    </S.BoothDetailName>
                    <S.FilterInfo>
                      <S.FilterTag
                        $bgColor={
                          selectBooth.filters.time === "낮"
                            ? "#FFF2AD"
                            : "#D4EAFF"
                        }
                        $FontColor={
                          selectBooth.filters.time === "낮"
                            ? "#6D5C00"
                            : "#00326D"
                        }
                      >
                        {selectBooth.filters.time}부스
                      </S.FilterTag>
                      <S.FilterTag $bgColor="#FFD5D5" $FontColor="#FF0000">
                        {selectBooth.filters.type}
                      </S.FilterTag>
                      <S.FilterTag $bgColor="#FFD9A1" $FontColor="#DB4200">
                        {selectBooth.filters.location}
                      </S.FilterTag>
                    </S.FilterInfo>
                  </S.FilterLeft>
                </S.BoothDetailHeader>
                <S.BoothDetailImage
                  src={selectBooth.image}
                  alt={selectBooth.boothName}
                />
                <S.BoothDetailInfo>
                  {selectBooth.description && (
                    <S.Details>
                      <S.DetailTitle>한줄소개</S.DetailTitle>
                      <S.DetailContext>
                        {selectBooth.description}
                      </S.DetailContext>
                    </S.Details>
                  )}
                  {selectBooth.owner && (
                    <S.Details>
                      <S.DetailTitle>운영주체</S.DetailTitle>
                      <S.DetailContext>{selectBooth.owner}</S.DetailContext>
                    </S.Details>
                  )}
                  {selectBooth.operationTime && (
                    <S.Details>
                      <S.DetailTitle>운영시간</S.DetailTitle>
                      <S.DetailContext>
                        {selectBooth.operationTime}
                      </S.DetailContext>
                    </S.Details>
                  )}
                  <S.DetailLine />
                  {selectBooth.entranceFee && (
                    <S.Details>
                      <S.DetailTitle>입장료</S.DetailTitle>
                      <S.DetailContext>
                        {selectBooth.entranceFee}
                      </S.DetailContext>
                    </S.Details>
                  )}
                  {selectBooth.menu && (
                    <S.Details>
                      <S.DetailTitle>대표메뉴</S.DetailTitle>
                      <S.DetailContext>{selectBooth.menu}</S.DetailContext>
                    </S.Details>
                  )}
                  <S.DetailLine />
                  {selectBooth.instagram && (
                    <S.Details>
                      <S.DetailTitle>인스타</S.DetailTitle>
                      <S.DetailContext>{selectBooth.instagram}</S.DetailContext>
                    </S.Details>
                  )}
                  {selectBooth.filters.type === "주점" && (
                    <S.LineNowBox>
                      <S.LineNowText>테이블링 예약하기</S.LineNowText>
                      <S.LineNowLogo src={LinenowLogo}></S.LineNowLogo>
                    </S.LineNowBox>
                  )}
                </S.BoothDetailInfo>
              </S.BoothDetailContent>
            </S.BoothDetailWrapper>
          </>
        )}
      </S.MainWrapper>
    </>
  );
};
