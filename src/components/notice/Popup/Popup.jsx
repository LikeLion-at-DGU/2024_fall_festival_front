import React from "react";
import * as S from "./popupstyle";

const Popup = ({ onClose }) => {
    const handleConfirmClick = () => {
        window.location.href = "https://www.instagram.com/donggukstuco?igsh=MTc4MHFsdmY3Znh4YQ==";
    };

    return (
        <S.PopupContainer>
            <S.TextWrapper>
                <p id="title">인스타그램 연결</p>
                <p id="comment">축제기획단 인스타그램으로 이동합니다.</p>
            </S.TextWrapper>
            <S.ButtonWrapper>
                <S.CancelButton onClick={onClose}>취소</S.CancelButton> 
                <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton> 
            </S.ButtonWrapper>
        </S.PopupContainer>
    );
};

export default Popup;
