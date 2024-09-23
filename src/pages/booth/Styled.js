import styled, { keyframes } from 'styled-components';
import { IoIosArrowDown, IoIosHeart, IoIosClose } from "react-icons/io";
import { FaLocationDot, FaArrowRotateLeft } from "react-icons/fa6";

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
  height: 100vh;
`;

// 날짜 토글
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const DateSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  gap: 6.65px;
  width: 100%;
`;

// DateButton 컴포넌트
export const DateButton = styled.div`
  background-color: ${({ $active }) => ($active ? "#FFF3EA" : "#FFFFFF")};
  color: ${({ $active, theme }) => ($active ? theme.colors.buttonFall : theme.colors.noneSelected)};
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoB00['font-family']};
  padding: 0.625rem 1rem;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  

  transition: background-color 0.3s ease, color 0.3s ease;
  
  /* 선택된 버튼 애니메이션 */
  ${({ $active }) => $active && `
    background-color: #FFF3EA;
    color: ${({ theme }) => theme.colors.buttonFall};
  `}

  /* 선택되지 않은 버튼 애니메이션 */
  ${({ $active }) => !$active && `
    background-color: #FFFFFF;
    color: ${({ theme }) => theme.colors.noneSelected};
  `}
`;



// 카카오맵이 들어갈 자리
export const MapPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  margin-bottom: 20px;
`;

// 부스 리스트와 필터가 들어가는 Wrapper
export const BoothListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  padding: 1rem;
  bottom: ${({ $isOpen }) => ($isOpen ? '0' : '-140px')}; /* 리스트가 열리면 아래로 내려감 */
  width: 100%;
  max-width: 540px;
  height: ${({ $isOpen }) => ($isOpen ? '50%' : '200px')}; /* 필터 포함한 리스트 높이 */
  background-color: inherit;
  transition: bottom 0.5s ease, height 0.5s ease; /* 애니메이션 효과 */
  z-index: 10;
`;

// 부스 리스트 헤더
export const BoothListHeader = styled.div`
  position: absolute;
  top: -20px; /* 부스 리스트 위에 고정 */
  right: 0;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px 4px;
  border-radius: 2.2px;
  background: #FFF;
  box-shadow: 0px 2.2px 11px 0px rgba(0, 0, 0, 0.20);
  cursor: pointer;
  z-index: 20; /* 리스트 위에 떠 있음 */
`;

export const Arrow = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.fall};
  cursor: pointer;

  svg {
    transform: scaleY(0.7); /* 세로 길이를 70%로 줄임 */
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

  border-radius: ${({ $isOpen }) => $isOpen ? '8.55px 8.55px 0 0' : '8.55px'}; 
  
  background-color: ${({ selected, theme }) => selected ? theme.colors.confirmButton : '#FFFFFF'};
  color: ${({ selected, theme }) => (selected ? '#FFFFFF' : theme.colors.fall)};

  cursor: pointer;
  width: 62px;
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
  width: 62px;
  transform: translateX(-0.5px);
  background-color: inherit;
  border: 0.95px solid ${({ theme }) => theme.colors.confirmButton};
  border-radius: 0 0 5px 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  list-style: none;
  padding: 0;
`;

// 드롭다운 아이템
export const DropdownItem = styled.li`

  font-size: 10px;

  padding: 8px 0px;
  color: ${({ theme, isSelected }) => (isSelected ? '#FFFFFF' : theme.colors.fall)};
  background-color: ${({ isSelected }) => (isSelected ? theme.colors.confirmButton : '#FFFFFF')};
  cursor: pointer;
  text-align: center;

  &:not(:last-child) {
    border-bottom: 0.95px solid ${({ theme }) => theme.colors.confirmButton};
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
  }

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? theme.colors.confirmButton : '#FFF3EA')};// 여기도 FFF3EA
  }
`;

// 초기화 ( 아직 수정 필요 그림 찾기.. ㅎ )
export const ResetButton = styled(FaArrowRotateLeft)`
  width: 17px;
  height: 17px;
  color: #5F5F5F;

  transition: transform 1s ease;

  cursor: pointer;
`;

// 부스 리스트
export const BoothList = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  overflow-y: auto; /* 리스트 스크롤 */
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')}; /* 리스트가 열렸을 때만 보임 */
`;

export const NoticeTabling = styled.div`
  padding: 0px 10px 5px 10px;
  color: #5F5F5F;
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoL00['font-family']}; // R
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BoothItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  background-color: ${({ $isColored }) => ($isColored ? '#FFF3EA' : "#fff")};
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
  width: calc(100% - 150px); /* 썸네일을 제외한 공간 */
`;

export const BoothWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LocationButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 50px;

  color: #5F5F5F;
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoL00['font-family']}; // R
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;

`;

export const BoothName = styled.div`
  display: flex;

  color: #000;

  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoB00['font-family']}; // M
  font-size: 14.045px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HeartWrap = styled.div`
  display: flex;
  flex-direction: row;

  gap: 4px;

  color: #000;
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoL00['font-family']}; // R
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BoothWho = styled.div`
  display: flex;

  color: #5F5F5F;

  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoL00['font-family']}; // R
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const NoBooth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  color: #5F5F5F;
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoB00['font-family']}; // M00인데 다운이 안되어있네요 ㅠ
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

//부스 디테일
export const BoothDetailWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 540px;
  height: 54%;
  background-color: #FFF;
  padding: 2rem 1.75rem;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.70);
  z-index: 30;

  animation: ${({ $isVisible }) => $isVisible ? slideInUp : slideOutDown} 0.75s ease-out;
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
  color: #FF9849;
`;

export const BoothDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoL00['font-family']};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Details = styled.div`
  display: flex;
  gap: 18px;
`;

export const DetailTitle = styled.div`
  display: flex;

  color: #000;
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoB00['font-family']};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DetailContext = styled.div`
  display: flex;

  color: #000;
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoL00['font-family']}; // R
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DetailLine = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: #B6B6B6;
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
  background: #E9FF99;
`;

export const LineNowText = styled.div`
  color: #333740;
  font-family: ${({ theme }) => theme.fonts.AppleSDGothicNeoB00['font-family']}; // M
  font-size: 10.5px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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

  color: #FF9849;
`;

export const StyledIoIosHeart = styled(IoIosHeart)`
  display: flex;

  color: ${({ theme }) => theme.colors.buttonFall };
`;

export const CloseButton = styled(IoIosClose)`
  position: absolute;
  top: 4px;
  right: 4px;
  background: transparent;
  border: none;
  font-size: 32px;
  cursor: pointer;
  color: #5F5F5F;

`;