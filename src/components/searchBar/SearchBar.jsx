import React, { useState } from "react";
import axios from "axios";
import * as S from "./SearchBarStyle"; // 스타일 파일 import
import searchIcon from "../../assets/images/searchIcon.svg"; 

const SearchBar = () => {
    const [searchWord, setSearch] = useState("");

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get("/api/v1/booth/", {
                params: {
                    //필요하면 필터링
                },
            });

            const data = response.data;
            console.log("받아온 데이터:", data);

            // 검색어와 부스 name 또는 host가 일치하는 항목 필터링
            const filteredData = data.filter((booth) => 
                booth.name.includes(searchWord) || booth.host.includes(searchWord)
            );

            console.log("필터링된 데이터:", filteredData); // 콘솔에 필터링된 결과 출력
        } catch (err) {
            console.error("데이터를 가져오는 중 오류 발생:", err);
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
                <S.SearchIcon src={searchIcon} alt="검색 이미지" />
            </S.SearchButton>
        </S.SearchContainer>
    );
};

export default SearchBar;
