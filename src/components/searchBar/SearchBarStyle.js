import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-bottom: 10px;
  padding: 3px 5px;
  border: 1px solid #dddddd;
  border-radius: 10px;
  height: 35px;
  color: #5f5f5f;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 12px;
`;

export const SearchButton = styled.button`
  cursor: pointer;
  padding-top: 3px;
  padding-right: 5px;
`;

export const SearchIcon = styled.img`
  width: 14px;
  height: 14px;
`;
