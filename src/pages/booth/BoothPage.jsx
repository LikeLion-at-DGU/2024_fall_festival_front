import React, { useState } from 'react';
import * as S from './Styled';
import { RxDoubleArrowDown, RxDoubleArrowUp } from "react-icons/rx";
import BoothData from '../../../src/boothdata/Boothdata';
import LinenowLogo from '../../assets/img/LinenowLogo.png'

export const BoothPage = () => {
  // 초기 날짜 선택 용
  const [selectedDate, setSelectedDate] = useState('10/7(월)');

  // 부스 리스트를 띄울 지 말지
  const [isBoothListOpen, setIsBoothListOpen] = useState(true);

  // 부스 필터링 용
  const [selectedTime, setSelectedTime] = useState('시간');
  const [selectedType, setSelectedType] = useState('유형');
  const [selectedLocation, setSelectedLocation] = useState('위치');
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    time: false,
    type: false,
    location: false,
  });

  // 부스 디테일 띄우는 용
  const [selectBooth, setSelectBooth] = useState(null);

  // 부스 위치 버튼 상태 보관 용
  const [boothLocation, setBoothLocation] = useState(null);
  

  const toggleDropdown = (type) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  const handleSelect = (type, value) => {
    if (type === 'time') setSelectedTime(value);
    if (type === 'type') setSelectedType(value);
    if (type === 'location') setSelectedLocation(value);

    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [type]: prevState[type],  // 선택 후 필터를 닫는 겁니다아
    }));
  };

  const resetFilters = (e) => {
    setSelectedTime('시간');
    setSelectedType('유형');
    setSelectedLocation('위치');

    const button = e.currentTarget;

    button.style.transform = 'rotate(0deg)';
    button.style.transition = 'none';
    
    setTimeout(() => {
      button.style.transition = 'transform 1s ease';
      button.style.transform = 'rotate(-360deg)';
    }, 10);
  };

  // 부스 위치 버튼 클릭시 ! - 나중에 카카오맵에서 해당 위치를 카카오 맵에 띄우기
  const handleBoothLocation = (boothId) => {
    setBoothLocation(boothId);
  }

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
  };

  const filteredBooths = BoothData.filter((booth) => {
    const timeMatch = selectedTime === '시간' || booth.filters.time === selectedTime;
    const typeMatch = selectedType === '유형' || booth.filters.type === selectedType;
    const locationMatch = selectedLocation === '위치' || booth.filters.location === selectedLocation;

    // 모든 필터 조건을 만족하는 부스만 반환
    return timeMatch && typeMatch && locationMatch;
  });


  return (
    <S.MainWrapper>
      {/* 상단 날짜 선택 버튼 */}
      <S.Header>
        <S.DateSelector>
          <S.DateButton
            $active={selectedDate === '10/7(월)'}
            onClick={() => handleDateChange('10/7(월)')}
          >
            10/7(월)
          </S.DateButton>
          <S.DateButton
            $active={selectedDate === '10/8(화)'}
            onClick={() => handleDateChange('10/8(화)')}
          >
            10/8(화)
          </S.DateButton>
        </S.DateSelector>
      </S.Header>

      {/* 카카오맵 자리 */}
      <S.MapPlaceholder>여기에 카카오맵이 들어갑니다.</S.MapPlaceholder>

      {/* 부스 리스트 */}
      <S.BoothListWrapper $isOpen={isBoothListOpen}>
        <S.BoothListHeader onClick={toggleBoothList}>
          <S.Arrow>{isBoothListOpen ? <RxDoubleArrowDown /> : <RxDoubleArrowUp />}</S.Arrow>
        </S.BoothListHeader>

        {/* 필터 섹션 (부스 리스트 안에) */}
        <S.FilterWrapper>
          <S.Filters>
            <S.FilterItem selected={selectedTime !== '시간'} $isOpen={isDropdownOpen.time} onClick={() => toggleDropdown('time')}>
              {selectedTime}
              <S.Arrow2><S.StyledIoIosArrowDown /></S.Arrow2>
              {isDropdownOpen.time && (
                <S.Dropdown>
                  <S.DropdownItem onClick={() => handleSelect('time', '시간')}>전체</S.DropdownItem>
                  <S.DropdownItem onClick={() => handleSelect('time', '낮')}>낮</S.DropdownItem>
                  <S.DropdownItem onClick={() => handleSelect('time', '밤')}>밤</S.DropdownItem>
                </S.Dropdown>
              )}
            </S.FilterItem>

            <S.FilterItem selected={selectedType !== '유형'} $isOpen={isDropdownOpen.type} onClick={() => toggleDropdown('type')}>
              {selectedType}
              <S.Arrow2><S.StyledIoIosArrowDown /></S.Arrow2>
              {isDropdownOpen.type && (
                <S.Dropdown>
                  <S.DropdownItem onClick={() => handleSelect('type', '유형')}>전체</S.DropdownItem>
                  <S.DropdownItem onClick={() => handleSelect('type', '푸드트럭')}>푸드트럭</S.DropdownItem>
                  <S.DropdownItem onClick={() => handleSelect('type', '주점')}>주점</S.DropdownItem>
                  <S.DropdownItem onClick={() => handleSelect('type', '기타')}>기타</S.DropdownItem>
                </S.Dropdown>
              )}
            </S.FilterItem>

            <S.FilterItem selected={selectedLocation !== '위치'} $isOpen={isDropdownOpen.location} onClick={() => toggleDropdown('location')}>
              {selectedLocation}
              <S.Arrow2><S.StyledIoIosArrowDown /></S.Arrow2>
              {isDropdownOpen.location && (
                <S.Dropdown>
                  <S.DropdownItem onClick={() => handleSelect('location', '위치')}>전체</S.DropdownItem>
                  <S.DropdownItem onClick={() => handleSelect('location', '팔정도')}>팔정도</S.DropdownItem>
                  <S.DropdownItem onClick={() => handleSelect('location', '만해광장')}>만해광장</S.DropdownItem>
                </S.Dropdown>
              )}
            </S.FilterItem>
          </S.Filters>

          {/* 초기화 버튼 */}
          <S.ResetButton onClick={resetFilters}>초기화</S.ResetButton>
        </S.FilterWrapper>

        {/* 부스 리스트 */}
        <S.BoothList $isOpen={isBoothListOpen}>
          <S.NoticeTabling>부스 클릭 시 테이블링 예약 링크로 이동 가능합니다.</S.NoticeTabling>
          {filteredBooths.length > 0 ? (
            filteredBooths.map((booth) => (
              <S.BoothItem
                key={booth.id}
                $isColored = { boothLocation === booth.id }
                onClick={() => handleSelectBooth(booth)}
              >
                {/* 나중에 좋아요순으로 수정 */}
                <S.BoothThumbnail src={booth.image} />
                <S.BoothInfo>
                  <S.BoothWrap>
                    <S.BoothName>{booth.boothName}</S.BoothName>
                    <S.HeartWrap>
                      <S.StyledIoIosHeart />
                      {booth.likes}
                    </S.HeartWrap>
                  </S.BoothWrap>
                  <S.BoothWho>{booth.owner}</S.BoothWho>
                </S.BoothInfo>
                <S.LocationButton onClick={(e) => {
                  handleBoothLocation(booth.id)
                }}>
                  <S.StyledFaLocationDot />
                  위치 보기
                </S.LocationButton>
              </S.BoothItem>
            ))
          ) : (
            <S.NoBooth>
              현재 운영중인 부스가 없어요!
            </S.NoBooth>
          )}
        </S.BoothList>
      </S.BoothListWrapper>

      {/* 선택한 부스 디테일 */}
      {selectBooth && (
        <>
          <S.BackgroundOverlay onClick={() => setSelectBooth(null)} />
          <S.BoothDetailWrapper $isVisible={selectBooth}>
            <S.BoothDetailContent>
            <S.CloseButton onClick={() => setSelectBooth(null)}>X</S.CloseButton>
              <S.BoothDetailHeader>
                <S.BoothDetailName>{selectBooth.boothName}</S.BoothDetailName>
                <S.FilterInfo>
                  <S.FilterTag
                    $bgColor={selectBooth.filters.time === '낮' ? "#FFF2AD" : "#D4EAFF"}
                    $FontColor={selectBooth.filters.time === '낮' ? "#6D5C00" : "#00326D"}
                  >{selectBooth.filters.time}부스</S.FilterTag>
                  <S.FilterTag $bgColor="#FFD5D5" $FontColor="#FF0000">{selectBooth.filters.type}</S.FilterTag>
                  <S.FilterTag $bgColor="#FFD9A1" $FontColor="#DB4200">{selectBooth.filters.location}</S.FilterTag>
                </S.FilterInfo>
                <S.BoothDetailLikes>
                  <S.StyledIoIosHeart />
                  {selectBooth.likes}
                </S.BoothDetailLikes>
              </S.BoothDetailHeader>
              <S.BoothDetailImage src={selectBooth.image} alt={selectBooth.boothName} />
              <S.BoothDetailInfo>
                
                {selectBooth.description && (
                  <S.Details>
                    <S.DetailTitle>한줄소개</S.DetailTitle>
                    <S.DetailContext>{selectBooth.description}</S.DetailContext>
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
                    <S.DetailContext>{selectBooth.operationTime}</S.DetailContext>
                  </S.Details>
                )}
                <S.DetailLine />
                {selectBooth.entranceFee && (
                  <S.Details>
                    <S.DetailTitle>입장료</S.DetailTitle>
                    <S.DetailContext>{selectBooth.entranceFee}</S.DetailContext>
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
  );
};
