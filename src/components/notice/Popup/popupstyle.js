    import styled from "styled-components";

    export const PopupContainer = styled.div`
    width: 340px;
    padding: 40px 8px 28px 8px;
    background-color: #fffef7;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px; 
    text-align: center;
    `;

    export const TextWrapper = styled.div`
    #title {
        font-size: 18px;
        font-weight: bold;
        color: #333;
        margin-bottom: 24px;
    }

    #comment {
        font-size: 12px;
        color: #666;
    }
    `;

    export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 35px;
    width: 100%;
    `;

    export const CancelButton = styled.button`
    width: 35%;
    padding: 10px 0;
    background-color: #ebebeb;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    color: #000;
    cursor: pointer;

    &:hover {
        background-color: #e0e0e0;
    }
    `;

    export const ConfirmButton = styled.button`
    width: 35%;
    padding: 10px 0;
    background-color: #ff7f2a;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #ff6610;
    }
    `;
