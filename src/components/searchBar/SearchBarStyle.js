import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 10px auto;
    padding: 3px 10px;
    border: 1px solid #DDDDDD;
    border-radius: 10px;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 12px;
    color: #5F5F5F;
`;

export const SearchButton = styled.button`
    cursor: pointer;
    padding-top: 3px;
    padding-right: 5px;
`;

export const SearchIcon = styled.img`
    width: 12px;
    height: 12px;
`;
