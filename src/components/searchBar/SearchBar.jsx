import React, { useState } from "react";
import * as S from "./SearchBarStyle";
import searchIcon from "../../assets/images/searchIcon.svg";
import { useBoothData } from "../../hook/useBooth"; // boothpage.jsx와 동일한 방식으로 데이터 훅 사용

export const SearchBar = ({ setFilteredData, setIsSearchExecuted }) => {
  const [searchWord, setSearchWord] = useState(""); // 검색어 입력 상태 관리

  const handleInput = (e) => {
    setSearchWord(e.target.value);
  };

  // BoothPage.jsx에서 사용한 API 데이터 훅을 활용
  const { boothData: boothData1 } = useBoothData({
    day: "Mon", // 월요일 부스 데이터
  });
  const { boothData: boothData2 } = useBoothData({
    day: "Tue", // 화요일 부스 데이터
  });

  const combinedBoothData = [...(boothData1 || []), ...(boothData2 || [])];

  // 검색어를 통해 부스 데이터를 필터링
  const handleSearch = () => {
    setIsSearchExecuted(true); // 검색이 실행되면 상태를 true로 변경

    if (!searchWord.trim()) {
      setFilteredData(combinedBoothData); // 모든 부스를 다시 설정
      return;
    }

    const filteredData = combinedBoothData?.filter(
      (booth) =>
        booth.name.includes(searchWord) || booth.host.includes(searchWord)
    );

    if (filteredData?.length > 0) {
      setFilteredData(filteredData);
    } else {
      setFilteredData([]); // 검색 결과가 없을 경우 빈 배열로 설정
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <S.SearchContainer>
      <S.SearchInput
        type="text"
        placeholder="전체 부스명 or 운영주체 검색"
        value={searchWord}
        onChange={handleInput}
        onKeyPress={handleKeyPress}
      />
      <S.SearchButton onClick={handleSearch}>
        <S.SearchIcon src={searchIcon} alt="검색 아이콘" />
      </S.SearchButton>
    </S.SearchContainer>
  );
};

export default SearchBar;
