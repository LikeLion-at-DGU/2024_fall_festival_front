import React, { useState, useEffect, useRef } from "react";
import * as S from "./Styled";
import { RxDoubleArrowDown, RxDoubleArrowUp } from "react-icons/rx";
import { TopBar } from "@components/topBar/TopBar";
import { Modal } from "@components/modal/Modal"; // 모달 import
import { useBoothData } from "../../hook/useBooth";
import BoothData from "../../../src/boothdata/Boothdata";
import LinenowLogo from "../../assets/images/LinenowLogo.png";
import nonselect_GI from "../../assets/images/nonselect_GI.png";
import nonselect_JU from "../../assets/images/nonselect_JU.png";
import select_GI from "../../assets/images/select_GI.png";
import select_JU from "../../assets/images/select_JU.png";

export const BoothPage = () => {
  // 모달 상태 추가
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { boothData } = useBoothData();
  console.log("boothData:", boothData);

  const [selectedDate, setSelectedDate] = useState("10/7(월)");
  const [isBoothListOpen, setIsBoothListOpen] = useState(true);
  const [selectedTime, setSelectedTime] = useState("시간");
  const [selectedType, setSelectedType] = useState("유형");
  const [selectedLocation, setSelectedLocation] = useState("위치");
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    time: false,
    type: false,
    location: false,
  });
  const [selectBooth, setSelectBooth] = useState(null);
  const [highlightedBooth, setHighlightedBooth] = useState(null);
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
      [type]: prevState[type],
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

  const handleBoothLocation = (boothId) => {
    const booth = BoothData.find((booth) => booth.id === boothId);
    setHighlightedBooth(booth);
  };

  const handleDateChange = (date) => setSelectedDate(date);

  const toggleBoothList = () => setIsBoothListOpen(!isBoothListOpen);

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

    return timeMatch && typeMatch && locationMatch;
  });

  const getInitialMarkerImage = (booth) => {
    let markerImage =
      booth.filters.type === "주점" ? nonselect_JU : nonselect_GI;

    return new window.kakao.maps.MarkerImage(
      markerImage,
      new window.kakao.maps.Size(30, 36)
    );
  };

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
        mapRef.current = new window.kakao.maps.Map(
          container,
          options
        );

        filteredBooths.forEach((booth) => {
          const markerPosition = new window.kakao.maps.LatLng(
            booth.latitude,
            booth.longitude
          );
          const markerImage = getInitialMarkerImage(booth);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage,
            map: mapRef.current,
          });

          window.kakao.maps.event.addListener(marker, "click", () => {
            handleBoothLocation(booth.id);
          });

          markersRef.current.push({ boothId: booth.id, marker });
        });
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!highlightedBooth) {
      markersRef.current.forEach(({ marker, boothId }) => {
        const booth = BoothData.find((b) => b.id === boothId);
        if (booth) {
          const initialImage = getInitialMarkerImage(booth);
          marker.setImage(initialImage);
        }
      });
      return;
    }

    if (highlightedBooth && mapRef.current) {
      const newCenter = new window.kakao.maps.LatLng(
        highlightedBooth.latitude - 0.0017,
        highlightedBooth.longitude
      );
      mapRef.current.setCenter(newCenter);
    }

    markersRef.current.forEach(({ boothId, marker }) => {
      const isHighlighted =
        highlightedBooth && highlightedBooth.id === boothId;
      if (isHighlighted) {
        let markerImage;
        if (highlightedBooth.filters.type === "주점") {
          markerImage = select_JU;
        } else if (highlightedBooth.filters.type === "기타") {
          markerImage = select_GI;
        }
        marker.setImage(
          new window.kakao.maps.MarkerImage(
            markerImage,
            new window.kakao.maps.Size(32, 40)
          )
        );
      } else {
        const booth = BoothData.find((b) => b.id === boothId);
        if (booth) {
          const initialImage = getInitialMarkerImage(booth);
          marker.setImage(initialImage);
        }
      }
    });
  }, [highlightedBooth]);

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            opacity: isModalOpen ? 0.5 : 1,
            transition: "opacity 0.3s",
          }}
        ></div>
        <TopBar openModal={openModal} />
        <S.MainWrapper>
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

          <S.MapPlaceholder id="map">
            여기에 카카오맵이 들어갑니다.
          </S.MapPlaceholder>

          <S.BoothListWrapper $isOpen={isBoothListOpen}>
            <S.BoothListHeader onClick={toggleBoothList}>
              <S.Arrow>
                {isBoothListOpen ? (
                  <RxDoubleArrowDown />
                ) : (
                  <RxDoubleArrowUp />
                )}
              </S.Arrow>
            </S.BoothListHeader>

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
                      <S.DropdownItem
                        onClick={() => handleSelect("time", "낮")}
                      >
                        낮
                      </S.DropdownItem>
                      <S.DropdownItem
                        onClick={() => handleSelect("time", "밤")}
                      >
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
                        onClick={() =>
                          handleSelect("type", "푸드트럭")
                        }
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
                        onClick={() =>
                          handleSelect("location", "위치")
                        }
                      >
                        전체
                      </S.DropdownItem>
                      <S.DropdownItem
                        onClick={() =>
                          handleSelect("location", "팔정도")
                        }
                      >
                        팔정도
                      </S.DropdownItem>
                      <S.DropdownItem
                        onClick={() =>
                          handleSelect("location", "만해광장")
                        }
                      >
                        만해광장
                      </S.DropdownItem>
                    </S.Dropdown>
                  )}
                </S.FilterItem>
              </S.Filters>

              <S.ResetButton onClick={resetFilters}>
                초기화
              </S.ResetButton>
            </S.FilterWrapper>

            <S.BoothList $isOpen={isBoothListOpen}>
              <S.NoticeTabling>
                부스 클릭 시 테이블링 예약 링크로 이동 가능합니다.
              </S.NoticeTabling>
              {filteredBooths.length > 0 ? (
                filteredBooths.map((booth) => (
                  <S.BoothItem
                    key={booth.id}
                    $isColored={
                      highlightedBooth &&
                      highlightedBooth.id === booth.id
                    }
                    onClick={() => handleSelectBooth(booth)}
                  >
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

          {selectBooth && (
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
                      <S.FilterTag
                        $bgColor="#FFD5D5"
                        $FontColor="#FF0000"
                      >
                        {selectBooth.filters.type}
                      </S.FilterTag>
                      <S.FilterTag
                        $bgColor="#FFD9A1"
                        $FontColor="#DB4200"
                      >
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
                      <S.DetailContext>
                        {selectBooth.owner}
                      </S.DetailContext>
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
                      <S.DetailContext>
                        {selectBooth.menu}
                      </S.DetailContext>
                    </S.Details>
                  )}
                  <S.DetailLine />
                  {selectBooth.instagram && (
                    <S.Details>
                      <S.DetailTitle>인스타</S.DetailTitle>
                      <S.DetailContext>
                        {selectBooth.instagram}
                      </S.DetailContext>
                    </S.Details>
                  )}
                  {selectBooth.filters.type === "주점" && (
                    <S.LineNowBox>
                      <S.LineNowText>테이블링 예약하기</S.LineNowText>
                      <S.LineNowLogo
                        src={LinenowLogo}
                      ></S.LineNowLogo>
                    </S.LineNowBox>
                  )}
                </S.BoothDetailInfo>
              </S.BoothDetailContent>
            </S.BoothDetailWrapper>
          )}
          {isModalOpen && <Modal onClose={closeModal} />}
        </S.MainWrapper>
      </div>
    </>
  );
};
