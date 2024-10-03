import React, { useState } from "react";
import axios from "axios";
import * as S from "./SearchBarStyle";
import searchIcon from "../../assets/images/searchIcon.svg"; 

const SearchBar = () => {
    const [searchWord, setSearch] = useState("");
    const [message, setMessage] = useState(""); //결과 확인 출력용 추후 삭제!!

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = async () => {
        try {
            //우선 임시로 링크 걸어뒀습니다.
            const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/booth/`, {
                params: {
                    //필요하면 필터링
                },
            });

            const data = response.data;
            console.log("받아온 데이터:", data);

            //검색어와 부스 name or host가 일치하는 항목 불러오기
            const filteredData = data.filter((booth) => 
                booth.name.includes(searchWord) || booth.host.includes(searchWord)
            );

            if (filteredData.length > 0) {
                const boothIds = filteredData.map(booth => booth.id);
                console.log("필터링된 데이터:", filteredData);
                console.log("필터링된 부스 ID들:", boothIds); //부스 id 여기 있어유
                setMessage(""); //검색 결과 있으면 해당 결과 출력
            } else {
                setMessage("검색 결과가 없습니다.");
            }
        } catch (err) {
            console.error("데이터를 가져오는 중 오류 발생:", err);
            setMessage("데이터를 가져오는 중 오류가 발생했습니다.");
        }
    };

    return (
        <>
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
        {/* {message && <p>{message}</p>} */}
        </>
        
    );
};

export default SearchBar;
