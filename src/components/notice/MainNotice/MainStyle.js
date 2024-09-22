import styled from "styled-components";

export const MainNoticeWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const MainTitle = styled.div`
    width: 95%;
    font-size: 1rem;
    font-family: "AppleSDGothicNeoB00";
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
`;

export const MainNoticeBox = styled.div` //중복!
    width: 95%;  
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5% 4%;
    background-color: #fff2e9;
    border-radius: 9px;
    border: 1px solid #ffeada;
    gap: 6px;
    margin-bottom: 8px;
`;

export const BoxTitle = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-family: "AppleSDGothicNeoB00"; 
    font-weight: 600;
    color: #ED6308; 
    gap: 5px;
    img {
        width: 12px;
    }
`;

export const BoxContent = styled.div`
    flex-grow: 1;
    font-size: 12px;
    color: #5F5F5F; 
    font-family: "AppleSDGothicNeoB00";
    font-weight: 500;
`;

export const InstaIcon = styled.div`
    position: absolute;
    top: 8px;
    right: 12px;
    img {
        width: 100%;
        height: 100%;
    }
`;
