import * as S from "./Styled";
import React, { useState, useEffect, useRef } from "react";
import { RxDoubleArrowDown, RxDoubleArrowUp } from "react-icons/rx";
import { TopBar } from "@components/topBar/TopBar";
import { Modal } from "@components/modal/Modal";
import { useBoothData } from "../../hook/useBooth";
import { BoothDetail } from "@components/common/BoothDetail/BoothDetail";

import nonselect_GI from "../../assets/images/nonselect_GI.png";
import nonselect_JU from "../../assets/images/nonselect_JU.png";
import select_GI from "../../assets/images/select_GI.png";
import select_JU from "../../assets/images/select_JU.png";

export const BoothPage = () => {
  // 모달 상태 추가
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // 날짜 선택
  const getDayFromDate = (dateString) => {
    const dayPart = dateString.split("(")[1]; // 요일 부분 추출
    return dayPart ? dayPart.replace(")", "") : ""; // ")" 기호 제거 후 반환
  };
  // 해당 요일의 영어 이름 반환
  const translateDayToEnglish = (day) => {
    const dayMap = {
      월: "Mon",
      화: "Tue",
      수: "Wed",
      목: "Thu",
      금: "Fri",
      토: "Sat",
      일: "Sun",
    };
    return dayMap[day] || "";
  };

  const [selectedDate, setSelectedDate] = useState("10/7(월)");
  const dayInKorean = getDayFromDate(selectedDate); // "월" 추출
  const dayInEnglish = translateDayToEnglish(dayInKorean); // "Mon"으로 변환

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

  //목록리스트 API
  const { boothData } = useBoothData({
    day: dayInEnglish,
    category: selectedType !== "유형" ? selectedType : undefined,
    location: selectedLocation !== "위치" ? selectedLocation : undefined,
    is_night: selectedTime !== "시간" ? selectedTime === "밤" : undefined,
    is_reservable: undefined,
  });

  // console.log("boothpage:", boothData);

  // 부스 디테일 띄우는 용
  const [selectBooth, setSelectBooth] = useState(null);

  // 위치보기나 아이콘 클릭시 띄우는 용
  const [highlightedBooth, setHighlightedBooth] = useState(null);
  const boothRefs = useRef({});

  // 마킹 용 배열
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const mapSizingRef = useRef(null);
  const boothListRef = useRef(null);

  const toggleDropdown = (type) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  // 현위치 띄우기 용
  const [userLocation, setUserLocation] = useState(null);
  // 현위치 토글링 용
  const [followUser, setFollowUser] = useState(false);

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
    const booth = boothData.find((booth) => booth.id === boothId);
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

  // boothData가 null 또는 undefined일 수 있으니 체크
  const filteredBooths = Array.isArray(boothData)
    ? boothData.filter((booth) => {
        const timeMatch =
          selectedTime === "시간" ||
          (selectedTime === "밤" && booth.is_night === true) ||
          (selectedTime === "낮" && booth.is_night === false);
        const typeMatch =
          selectedType === "유형" || booth.category === selectedType;
        const locationMatch =
          selectedLocation === "위치" || booth.location === selectedLocation;

        return timeMatch && typeMatch && locationMatch;
      })
    : []; // boothData가 배열이 아닐 경우 빈 배열로 처리

  // 부스 유형에 따른 초기 마커 이미지 설정 함수
  const getInitialMarkerImage = (booth) => {
    if (!window.kakao || !window.kakao.maps) return null;

    let markerImage = booth.category === "주점" ? nonselect_JU : nonselect_GI;
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
        if (!mapRef.current) return;
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
        const booth = boothData.find((b) => b.id === boothId); // 해당 부스 데이터 찾기
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
        highlightedBooth.latitude,
        highlightedBooth.longitude
      );
      mapRef.current.panTo(newCenter);
    }

    // 선택된 부스가 있을 경우, 해당 마커만 업데이트
    markersRef.current.forEach(({ boothId, marker }) => {
      const isHighlighted = highlightedBooth && highlightedBooth.id === boothId;

      // 선택된 부스의 마커를 변경
      if (isHighlighted) {
        let markerImage;
        if (highlightedBooth.category === "주점") {
          markerImage = select_JU; // 선택된 주점일 경우
        } else if (highlightedBooth.category === "기타") {
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
        const booth = boothData.find((b) => b.id === boothId); // 해당 부스 데이터 찾기
        if (booth) {
          const initialImage = getInitialMarkerImage(booth);
          marker.setImage(initialImage);
        }
      }
    });
  }, [highlightedBooth]);

  useEffect(() => {
    if (highlightedBooth && boothRefs.current[highlightedBooth.id]) {
      boothRefs.current[highlightedBooth.id].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [highlightedBooth]);

  useEffect(() => {
    if (mapSizingRef.current && boothListRef.current) {
      const boothListHeight = isBoothListOpen ? 420 : 120;
      const mapHeight = `calc(100vh - ${boothListHeight}px)`;
      mapSizingRef.current.style.height = mapHeight;

      if (mapRef.current) {
        mapRef.current.relayout();

        setTimeout(() => {
          window.kakao.maps.event.trigger(mapRef.current, "resize");

          if (highlightedBooth) {
            const newCenter = new window.kakao.maps.LatLng(
              highlightedBooth.latitude,
              highlightedBooth.longitude
            );
            mapRef.current.panTo(newCenter);
          }
        }, 200);
      }
    }
  }, [isBoothListOpen, selectBooth, highlightedBooth]);

  useEffect(() => {
    let watchId;
    let userMarker = null; // 사용자 위치 마커를 저장할 변수

    if (navigator.geolocation && followUser) {
      // 위치 변경 감지하여 실시간 위치 추적
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // 사용자 위치 업데이트
          setUserLocation({ latitude, longitude });

          // 카카오맵 SDK가 로드되고 mapRef가 정의된 이후에만 실행
          if (window.kakao && window.kakao.maps && mapRef.current) {
            // 기존 마커가 존재하면 삭제
            if (userMarker) {
              userMarker.setMap(null);
            }

            // 새로운 사용자 위치 마커 생성
            const userPosition = new window.kakao.maps.LatLng(
              latitude,
              longitude
            );
            userMarker = new window.kakao.maps.Marker({
              position: userPosition,
              map: mapRef.current,
              title: "현재 위치",
              image: new window.kakao.maps.MarkerImage(
                // 파란색 원형 점 이미지 (마커 커스텀)
                "data:image/svg+xml;charset=UTF-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg' fill='%23007bff'%3E%3Ccircle cx='12' cy='12' r='8'/%3E%3C/svg%3E",
                new window.kakao.maps.Size(24, 24), // 마커 사이즈
                { offset: new window.kakao.maps.Point(12, 12) } // 마커 중앙 위치 설정
              ),
            });

            // 지도 중심을 새로운 사용자 위치로 이동
            mapRef.current.setCenter(userPosition);
          }
        },
        (error) => {
          setUserLocation({ latitude: 37.5577, longitude: 127.00099 }); // 기본 위치로 설정
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    }

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId); // 위치 추적 멈추기
      }
      if (userMarker) {
        userMarker.setMap(null); // 컴포넌트 언마운트 시 기존 마커 삭제
      }
    };
  }, [mapRef.current, followUser]); // 토글링을 넣어서 껐다켰다 가능.

  return (
    <>
      <S.MainWrapper>
        {/* 상단 날짜 선택 버튼 */}
        <TopBar openModal={openModal} />

        {/* 카카오맵 자리 */}
        <S.MapPlaceholder
          ref={mapRef}
          $isBoothListOpen={isBoothListOpen}
          id="map"
        >
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
          <S.CurrentLocationButton onClick={() => setFollowUser(!followUser)}>
            {followUser ? "위치 추적 중지" : "현재 위치 보기"}
          </S.CurrentLocationButton>
        </S.MapPlaceholder>

        {/* 부스 리스트 */}
        <S.BoothListWrapper ref={boothListRef} $isOpen={isBoothListOpen}>
          <S.BoothListHeader onClick={toggleBoothList}>
            <S.Arrow>
              {isBoothListOpen ? <RxDoubleArrowDown /> : <RxDoubleArrowUp />}
            </S.Arrow>
          </S.BoothListHeader>

          {/* 필터 섹션 (부스 리스트 안에) */}
          <S.FilterWrapper>
            <S.Filters>
              <S.FilterItem
                $selected={selectedTime !== "시간"}
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
                      onClick={() => handleSelect("time", undefined)}
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
                $selected={selectedType !== "유형"}
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
                      onClick={() => handleSelect("type", "예약가능")}
                    >
                      예약가능
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
                $selected={selectedLocation !== "위치"}
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
                  ref={(el) => (boothRefs.current[booth.id] = el)} // 각 부스에 ref 추가
                  $isColored={
                    highlightedBooth && highlightedBooth.id === booth.id
                  }
                  onClick={() => handleSelectBooth(booth)}
                >
                  <S.BoothThumbnail
                    src={booth.thumbnail || "default_image_url.png"}
                  />
                  <S.BoothInfo>
                    <S.BoothWrap>
                      <S.BoothName>{booth.name}</S.BoothName>
                      <div>예약 가능</div>
                    </S.BoothWrap>
                    <S.BoothWho>{booth.host}</S.BoothWho>
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
            <BoothDetail
              booth_id={selectBooth.id}
              boothInfo={selectBooth}
              onClose={() => setSelectBooth(null)}
            />
          </>
        )}
        {isModalOpen && <Modal onClose={closeModal} />}
      </S.MainWrapper>
    </>
  );
};
