import React, { useState } from "react";
import * as S from "./SearchBarStyle";
import searchIcon from "../../assets/images/searchIcon.svg";
import { useBoothData } from "../../hook/useBooth"; // boothpage.jsx와 동일한 방식으로 데이터 훅 사용

export const SearchBar = () => {
  const [searchWord, setSearchWord] = useState(""); // 검색어 입력 상태 관리

  const handleInput = (e) => {
    setSearchWord(e.target.value);
  };

  // BoothPage.jsx에서 사용한 API 데이터 훅을 활용
  const { boothData } = useBoothData({
    day: undefined, // 날짜는 검색 기능에서 제외
    category: undefined, // 카테고리 필터는 제외
    location: undefined, // 위치 필터는 제외
    is_night: undefined, // 시간 필터는 제외
    is_reservable: undefined,
  });

  // 검색어를 통해 부스 데이터를 필터링
  const handleSearch = () => {
    if (!searchWord) return;

    const filteredData = boothData?.filter(
      (booth) =>
        booth.name.includes(searchWord) || booth.host.includes(searchWord)
    );

    if (filteredData?.length > 0) {
      console.log("검색 결과:", filteredData);
    } else {
      console.log("검색 결과가 없습니다.");
    }
  };

  return (
    <S.SearchContainer>
      <S.SearchInput
        type="text"
        placeholder="전체 부스명 or 운영주체 검색"
        value={searchWord}
        onChange={handleInput}
      />
      <S.SearchButton onClick={handleSearch}>
        <S.SearchIcon src={searchIcon} alt="검색 아이콘" />
      </S.SearchButton>
    </S.SearchContainer>
  );
};

export default SearchBar;
