import * as S from "./Styled";
import React, { useState, useEffect, useRef } from "react";
import { RxDoubleArrowDown, RxDoubleArrowUp } from "react-icons/rx";
import { TopBar } from "@components/topBar/TopBar";
import { Modal } from "@components/modal/Modal";
import { useBoothData } from "../../hook/useBooth";
import { BoothDetail } from "@components/common/BoothDetail/BoothDetail";
import { SearchBar } from "@components/searchBar/SearchBar";

import nonselect_GI from "../../assets/images/nonselect_GI.png";
import nonselect_JU from "../../assets/images/nonselect_JU.png";
import select_GI from "../../assets/images/select_GI.png";
import select_JU from "../../assets/images/select_JU.png";
import Footer from "../../components/about/Footer";
import userLocationIcon from "../../assets/images/userLocation.svg";

export const BoothPage = () => {
  // 모달 상태 추가
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [filteredData, setFilteredData] = useState([]);
  const [isSearchExecuted, setIsSearchExecuted] = useState(false); // 검색 실행 상태 추가

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
    setIsDropdownOpen((prevState) => {
      const newDropdownState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === type ? !prevState[key] : false;
        return acc;
      }, {});
      return newDropdownState;
    });
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
      [type]: prevState[type], // 선택 후 필터를 닫기
    }));
  };

  const resetFilters = (e) => {
    setSelectedTime("시간");
    setSelectedType("유형");
    setSelectedLocation("위치");

    setIsDropdownOpen({
      time: false,
      type: false,
      location: false,
    });

    const button = e.currentTarget;
    button.style.transform = "rotate(0deg)";
    button.style.transition = "none";

    setTimeout(() => {
      button.style.transition = "transform 1s ease";
      button.style.transform = "rotate(-360deg)";
    }, 10);
  };

  const handleBoothLocation = (boothId) => {
    const booth = boothData.find((booth) => booth.id === boothId);
    setHighlightedBooth(booth);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const toggleBoothList = () => {
    setIsBoothListOpen(!isBoothListOpen);
  };

  const handleSelectBooth = (booth) => {
    setSelectBooth(booth);
    setHighlightedBooth(booth);
  };

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

  const getInitialMarkerImage = (booth) => {
    let markerImage = booth.category === "음식점" ? nonselect_JU : nonselect_GI;

    return new window.kakao.maps.MarkerImage(
      markerImage,
      new window.kakao.maps.Size(30, 36)
    );
  };

  const loadKakaoMap = () => {
    return new Promise((resolve, reject) => {
      if (window.kakao && window.kakao.maps) {
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=972351b156b1bdfe825cb095c12d1e56&autoload=false`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.kakao.maps.load(() => {
          resolve();
        });
      };
      script.onerror = () => {
        console.error("Kakao Maps SDK 로드 실패");
        reject(new Error("Kakao Maps SDK 로드 실패"));
      };
    });
  };

  const initializeMap = async () => {
    try {
      await loadKakaoMap();

      const mapContainer = document.getElementById("map");
      if (!mapContainer) {
        console.error("지도 컨테이너를 찾을 수 없습니다.");
        return;
      }

      const options = {
        center: new window.kakao.maps.LatLng(37.5577, 127.00099),
        level: 3,
      };

      mapRef.current = new window.kakao.maps.Map(mapContainer, options);

      if (boothData?.length > 0) {
        createMarkers(boothData);
      }
    } catch (error) {
      console.error("지도 초기화 중 오류:", error);
    }
  };

  const createMarkers = (booths) => {
    booths.forEach((booth) => {
      try {
        if (!window.kakao || !window.kakao.maps) {
          console.error("Kakao Maps가 로드되지 않았습니다.");
          return;
        }

        const markerPosition = new window.kakao.maps.LatLng(
          booth.latitude,
          booth.longitude
        );
        const markerImage = new window.kakao.maps.MarkerImage(
          booth.category === "음식점" ? nonselect_JU : nonselect_GI,
          new window.kakao.maps.Size(30, 36)
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
          map: mapRef.current,
        });

        window.kakao.maps.event.addListener(marker, "click", () => {
          setHighlightedBooth(booth);
        });

        markersRef.current.push({ boothId: booth.id, marker });
      } catch (error) {
        console.error("마커 생성 중 오류:", error);
      }
    });
  };

  useEffect(() => {
    initializeMap();
  }, [boothData]);

  useEffect(() => {
    if (filteredBooths.length > 0 && mapRef.current) {
      markersRef.current.forEach(({ marker }) => marker.setMap(null));
      markersRef.current = [];
      createMarkers(filteredBooths);
    }
  }, [filteredBooths]);

  useEffect(() => {
    if (!highlightedBooth) {
      markersRef.current.forEach(({ marker, boothId }) => {
        const booth = boothData.find((b) => b.id === boothId);
        if (booth) {
          const initialImage = getInitialMarkerImage(booth);
          marker.setImage(initialImage);
        }
      });
      return;
    }

    if (highlightedBooth && mapRef.current) {
      mapRef.current.relayout();
      setTimeout(() => {
        const newCenter = new window.kakao.maps.LatLng(
          highlightedBooth.latitude,
          highlightedBooth.longitude
        );
        mapRef.current.panTo(newCenter);
      }, 200);
    }

    markersRef.current.forEach(({ boothId, marker }) => {
      const isHighlighted = highlightedBooth && highlightedBooth.id === boothId;

      if (isHighlighted) {
        let markerImage;
        if (highlightedBooth.category === "음식점") {
          markerImage = select_JU;
        } else if (highlightedBooth.category === "기타") {
          markerImage = select_GI;
        }
        marker.setImage(
          new window.kakao.maps.MarkerImage(
            markerImage,
            new window.kakao.maps.Size(32, 40)
          )
        );
        marker.setZIndex(9999);
        console.log(`Highlighted Marker ID ${boothId}: zIndex set to 9999`);
      } else {
        const booth = boothData.find((b) => b.id === boothId);
        if (booth) {
          const initialImage = getInitialMarkerImage(booth);
          marker.setImage(initialImage);

          // 기본 z-index 값 설정
          marker.setZIndex(0);
          console.log(`Reset Marker ID ${boothId}: zIndex set to 0`);
        }
      }
    });
  }, [highlightedBooth, isBoothListOpen]);

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
    if (mapRef.current) {
      // 부스 리스트의 상태가 변경되었을 때
      setTimeout(() => {
        mapRef.current.relayout(); // 맵의 레이아웃을 다시 그립니다.
      }, 0); // 맵 레이아웃 업데이트를 비동기적으로 수행
    }
  }, [isBoothListOpen]);

  useEffect(() => {
    let watchId;
    let userMarker = null;

    if (navigator.geolocation && followUser) {
      setHighlightedBooth(null);

      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setUserLocation({ latitude, longitude });

          if (window.kakao && window.kakao.maps && mapRef.current) {
            if (userMarker) {
              userMarker.setMap(null);
            }

            const userPosition = new window.kakao.maps.LatLng(
              latitude,
              longitude
            );
            userMarker = new window.kakao.maps.Marker({
              position: userPosition,
              map: mapRef.current,
              title: "현재 위치",
              image: new window.kakao.maps.MarkerImage(
                userLocationIcon,
                new window.kakao.maps.Size(24, 24),
                { offset: new window.kakao.maps.Point(12, 12) }
              ),
            });

            mapRef.current.panTo(userPosition);
          }
        },
        (error) => {
          setUserLocation({ latitude: 37.5577, longitude: 127.00099 });
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
        navigator.geolocation.clearWatch(watchId);
      }
      if (userMarker) {
        userMarker.setMap(null);
      }
    };
  }, [mapRef.current, followUser]);

  useEffect(() => {
    if (userLocation && mapRef.current && followUser) {
      mapRef.current.relayout();
      setTimeout(() => {
        const userPosition = new window.kakao.maps.LatLng(
          userLocation.latitude,
          userLocation.longitude
        );
        mapRef.current.panTo(userPosition);
      }, 200);
    }
  }, [isBoothListOpen, userLocation]);

  return (
    <>
      <S.MainWrapper>
        <TopBar openModal={openModal} />
        <SearchBar
          setFilteredData={setFilteredData}
          setIsSearchExecuted={setIsSearchExecuted}
        />
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
        </S.MapPlaceholder>

        <S.BoothListWrapper ref={boothListRef} $isOpen={isBoothListOpen}>
          <S.CurrentLocationButton onClick={() => setFollowUser(!followUser)}>
            <S.userLocationIcon $followUser={followUser} />
          </S.CurrentLocationButton>
          <S.BoothListHeader onClick={toggleBoothList}>
            <S.Arrow>
              {isBoothListOpen ? <RxDoubleArrowDown /> : <RxDoubleArrowUp />}
            </S.Arrow>
          </S.BoothListHeader>

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
                      onClick={() => handleSelect("type", "음식점")}
                    >
                      음식점
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
                    <S.DropdownItem
                      onClick={() => handleSelect("location", "사회과학관")}
                    >
                      사회과학관
                    </S.DropdownItem>
                    <S.DropdownItem
                      onClick={() => handleSelect("location", "혜화관")}
                    >
                      혜화관
                    </S.DropdownItem>
                  </S.Dropdown>
                )}
              </S.FilterItem>
            </S.Filters>

            <S.ResetButton onClick={resetFilters}>초기화</S.ResetButton>
          </S.FilterWrapper>

          <S.BoothList $isOpen={isBoothListOpen}>
            {filteredData && filteredData.length > 0 ? (
              filteredData.map((booth) => (
                <S.BoothItem
                  key={booth.id}
                  ref={(el) => (boothRefs.current[booth.id] = el)}
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
                      {booth.is_reservable && (
                        <S.reservabletag>linenow</S.reservabletag>
                      )}
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
            ) : isSearchExecuted ? (
              <S.NoBooth>해당 부스가 존재하지 않습니다.</S.NoBooth>
            ) : filteredBooths.length > 0 ? (
              filteredBooths.map((booth) => (
                <S.BoothItem
                  key={booth.id}
                  ref={(el) => (boothRefs.current[booth.id] = el)}
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
                      {booth.is_reservable && (
                        <S.reservabletag>linenow</S.reservabletag>
                      )}
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
              <S.NoBooth>해당 부스가 존재하지 않습니다.</S.NoBooth>
            )}

            <Footer />
          </S.BoothList>
        </S.BoothListWrapper>

        {selectBooth && (
          <BoothDetail
            booth_id={selectBooth.id}
            boothInfo={selectBooth}
            onClose={() => setSelectBooth(null)}
          />
        )}

        {isModalOpen && <Modal onClose={closeModal} />}
      </S.MainWrapper>
    </>
  );
};
