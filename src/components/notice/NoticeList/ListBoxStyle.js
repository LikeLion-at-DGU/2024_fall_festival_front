import styled from "styled-components";

export const ListWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const ListTitle = styled.div`
    width: 95%;
    font-size: 1rem;
    ${({ theme }) => theme.fonts.AppleSDGothicNeoB00};
    color: #000;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    #h1 {
        font-size: 1rem;
        ${({ theme }) => theme.fonts.AppleSDGothicNeoB00};
        color: #000;
        font-weight: bold;
    }

    #h3 {
        padding-top: 5px;
        padding-left: 1px;
        font-size: 0.6rem;
        ${({ theme }) => theme.fonts.AppleSDGothicNeoB00};
        color: #5F5F5F;
    }
`;

export const LBox = styled.div`
    width: 95%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5% 4%;
    border-radius: 9px;
    border: 1px solid #DDDDDD;
    gap: 6px;
    margin-bottom: 8px;
`;

export const BoxTitle = styled.div`
    font-size: 14px;
    ${({ theme }) => theme.fonts.AppleSDGothicNeoB00};
    color: #000;
    font-weight: 400;
`;

export const BoxContent = styled.div`
    font-size: 12px;
    color: #2A2A2A;
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
