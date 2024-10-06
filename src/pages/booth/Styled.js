import styled, { keyframes } from "styled-components";
import { IoIosArrowDown, IoIosHeart, IoIosClose } from "react-icons/io";
import { FaLocationDot, FaArrowRotateLeft } from "react-icons/fa6";
import { BiTargetLock } from "react-icons/bi";

export const userLocationIcon = styled(BiTargetLock)`
  color: ${({ $followUser }) => ($followUser ? "#ED6308" : "#5F5F5F")};
  width: 30px;
  height: 30px;
`;

//애니메이션 모음

const slideInUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOutDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background-color: white;
  /* height: 100vh; */
`;

// 날짜 토글
export const Header = styled.div`
  display: flex;
  position: absolute;
  z-index: 3;
  left: 8px;
  flex-direction: column;
`;
export const CurrentLocationButton = styled.div`
  display: flex;
  position: absolute;
  z-index: 20;
  top: -40px;
  left: 10px;
`;

export const DateSelector = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
`;

// DateButton 컴포넌트
export const DateButton = styled.div`
  background-color: ${({ $active }) => ($active ? "#FFF3EA" : "#FFFFFF")};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.buttonFall : theme.colors.noneSelected};
  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundB["font-family"]};

  border: none;

  cursor: pointer;

  transition: background-color 0.3s ease, color 0.3s ease;

  /* 선택된 버튼 애니메이션 */
  ${({ $active }) =>
    $active &&
    `
    background-color: #FFF3EA;
    color: ${({ theme }) => theme.colors.buttonFall};


    
  `}

  /* 선택되지 않은 버튼 애니메이션 */
  ${({ $active }) =>
    !$active &&
    `
    background-color: #FFFFFF;
    color: ${({ theme }) => theme.colors.noneSelected};
  `}

display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 40px;
  font-size: 14px;

  &:first-of-type {
    border-radius: 28px 0px 0px 28px;
  }
  &:nth-of-type(2) {
    border-radius: 0px 28px 28px 0px;
  }

  @media (max-width: 375px) {
    width: 53.2px;
    height: 28px;
    font-size: 11px;
  }

  /* 아이폰 12 Pro */
  @media (max-width: 390px) {
    width: 55px; /* 또는 필요한 스타일 */
    height: 28px; /* 또는 필요한 스타일 */
    font-size: 11px; /* 또는 필요한 스타일 */
  }
`;

// 카카오맵이 들어갈 자리
export const MapPlaceholder = styled.div`
  width: 100%;
  height: ${({ $isBoothListOpen }) =>
    $isBoothListOpen ? "calc(100vh - 95px - 35px - 300px)" : "calc(100vh)"};

  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  color: #666;
  position: relative;

  @media (max-width: 375px) {
    height: ${({ $isBoothListOpen }) =>
      $isBoothListOpen ? "calc(100vh - 95px - 35px - 290px)" : "calc(100vh)"};
  }
`;

// 부스 리스트와 필터가 들어가는 Wrapper
export const BoothListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  padding: 1rem;
  bottom: ${({ $isOpen }) => ($isOpen ? "0" : "-20px")};
  width: 100%;
  max-width: 540px;
  height: ${({ $isOpen }) => ($isOpen ? "300px" : "0px")};
  background-color: inherit;
  transition: bottom 0.5s ease, height 0.5s ease;
  z-index: 10;

  @media (max-width: 375px) {
    height: ${({ $isOpen }) => ($isOpen ? "290px" : "0px")};
  }
`;

// 부스 리스트 헤더
export const BoothListHeader = styled.div`
  position: absolute;
  top: -20px;
  right: 0;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px 4px;
  border-radius: 2.2px;
  background: #fff;
  box-shadow: 0px 2.2px 11px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 20;
`;

export const Arrow = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.fall};
  cursor: pointer;

  svg {
    transform: scaleY(0.7);
  }
`;

// 필터 섹션
export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Filters = styled.div`
  display: flex;
  gap: 0.625rem;
`;

// 필터 버튼 아이템
export const FilterItem = styled.div`
  font-size: 11px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  border: ${({ theme }) => `0.95px solid ${theme.colors.confirmButton}`};

  border-radius: ${({ $isOpen }) => ($isOpen ? "8.55px 8.55px 0 0" : "8.55px")};

  background-color: ${({ $selected, theme }) =>
    $selected ? theme.colors.confirmButton : "#FFFFFF"};
  color: ${({ $selected, theme }) =>
    $selected ? "#FFFFFF" : theme.colors.fall};

  cursor: pointer;
  width: 66px;
  height: 29px;
`;

// 화살표 아이콘
export const Arrow2 = styled.span`
  margin-left: 2px;
`;

// 드롭다운 리스트
export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 66px;
  transform: translateX(-0.5px);
  background-color: inherit;
  border: 0.95px solid ${({ theme }) => theme.colors.confirmButton};
  border-radius: 0 0 5px 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  list-style: none;
  padding: 0;

  animation: ${fadeIn} 0.4s ease;
`;

// 드롭다운 아이템
export const DropdownItem = styled.li`
  font-size: 10px;

  padding: 8px 0px;
  color: ${({ theme, isSelected }) =>
    isSelected ? "#FFFFFF" : theme.colors.fall};
  background-color: ${({ isSelected }) =>
    isSelected ? theme.colors.confirmButton : "#FFFFFF"};
  cursor: pointer;
  text-align: center;

  &:not(:last-child) {
    border-bottom: 0.95px solid ${({ theme }) => theme.colors.confirmButton};
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
  }

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? theme.colors.confirmButton : "#FFF3EA"}; // 여기도 FFF3EA
  }
`;

// 초기화 ( 아직 수정 필요 그림 찾기.. ㅎ )
export const ResetButton = styled(FaArrowRotateLeft)`
  width: 17px;
  height: 17px;
  color: #5f5f5f;

  transition: transform 1s ease;

  cursor: pointer;
`;

// 부스 리스트
export const BoothList = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  overflow-y: auto;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
`;

export const NoticeTabling = styled.div`
  padding: 0px 10px 5px 10px;
  color: #5f5f5f;
  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundR["font-family"]};
  font-size: 11px;
`;

export const BoothItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  background-color: ${({ $isColored }) => ($isColored ? "#FFF3EA" : "#fff")};
`;

export const BoothThumbnail = styled.img`
  width: 75px;
  height: 75px;
  background-color: #ddd;
  border-radius: 5px;
`;

export const BoothInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 75px;
  justify-content: space-around;
  margin-left: 1rem;
  width: calc(100% - 150px);
`;

export const BoothWrap = styled.div`
  display: flex;

  flex-direction: row;
  gap: 6px;
`;

export const LocationButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 50px;

  color: #5f5f5f;
  font-family: ${({ theme }) =>
    theme.fonts.NanumSquareRoundR["font-family"]}; // R
  font-size: 10px;

  cursor: pointer;
`;

export const BoothName = styled.div`
  display: flex;
  color: #000;
  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundB["font-family"]};
  align-items: center;
  font-size: 12px;
`;
export const reservabletag = styled.div`
  display: flex;
  width: 50px;
  height: 20px;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundOTF["font-family"]};
  border-radius: 4.09px;
  background: #e4ff83;
  color: #1851ff;

  font-size: 7px;

  font-weight: 700;
`;
export const HeartWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: #000;
  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundR["font-family"]};
  font-size: 10px;
`;

export const BoothWho = styled.div`
  display: flex;
  color: #5f5f5f;
  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundR["font-family"]};
  font-size: 10px;
`;

export const NoBooth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #5f5f5f;
  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundB["font-family"]};
  font-size: 13px;
`;

//부스 디테일
export const BoothDetailWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 540px;
  height: 400px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
  /* Firefox */
  scrollbar-width: none;

  /* Internet Explorer 10+, Edge */
  -ms-overflow-style: none;

  background-color: #fff;
  padding: 1.5rem 1.75rem;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.7);
  z-index: 30;

  animation: ${({ $isVisible }) => ($isVisible ? slideInUp : slideOutDown)}
    0.75s ease-out;
`;

export const BoothDetailImage = styled.img`
  width: 100%;
  height: 178px;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const BoothDetailContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoothDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoothDetailName = styled.h2`
  width: 55px;
  font-size: 18px;
  font-weight: bold;
`;

export const BoothDetailLikes = styled.div`
  display: flex;
  gap: 4px;
  font-size: 14px;
  color: #ff9849;
`;

export const BoothDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FilterLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const FilterInfo = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
  font-size: 14px;
  color: #666;
`;

export const FilterTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $FontColor }) => $FontColor};
  width: 46px;
  height: 16px;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundR["font-family"]};
  font-size: 10px;
`;

export const Details = styled.div`
  display: flex;
  gap: 18px;
`;

export const DetailTitle = styled.div`
  display: flex;
  color: #000;
  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundB["font-family"]};
  font-size: 10px;
`;

export const DetailContext = styled.div`
  display: flex;
  color: #000;
  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundR["font-family"]};
  font-size: 10px;
`;

export const DetailLine = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: #b6b6b6;
`;

export const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 24;
`;

//테이블링 버튼 디자인
export const LineNowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  gap: 18px;
  border-radius: 5.25px;
  background: #e9ff99;
`;

export const LineNowText = styled.div`
  color: #333740;
  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundB["font-family"]};
  font-size: 10.5px;
`;

export const LineNowLogo = styled.img`
  color: #000000;
  width: 56px;
`;

//아이콘 스타일링
export const StyledIoIosArrowDown = styled(IoIosArrowDown)`
  display: flex;
  text-align: center;
`;

export const StyledFaLocationDot = styled(FaLocationDot)`
  display: flex;
  text-align: center;
  width: 15px;
  height: 27px;
  color: #ff9849;
`;

export const StyledIoIosHeart = styled(IoIosHeart)`
  display: flex;
  color: ${({ theme }) => theme.colors.buttonFall};
`;

export const CloseButton = styled(IoIosClose)`
  position: absolute;
  top: 4px;
  right: 4px;
  background: transparent;
  border: none;
  font-size: 32px;
  cursor: pointer;
  color: #5f5f5f;
`;
