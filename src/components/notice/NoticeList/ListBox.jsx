import React from "react";
import * as S from "./listboxstyle";
import instaIcon from "../../../assets/images/instaIcon.png";

const ListBox = ({ title, content, onClick }) => {
    return (
        <S.LBox onClick={onClick}> {/* 클릭 시 모달 열기 */}
            <S.BoxTitle>
                <p id="mainNoticeTitle">{title}</p>
            </S.BoxTitle>
            <S.BoxContent>
                <p id="mainNoticeContent">{content}</p>
            </S.BoxContent>
            <S.InstaIcon>
                <img src={instaIcon} alt="인스타그램 아이콘" />
            </S.InstaIcon>
        </S.LBox>
    );
};

export default ListBox;
