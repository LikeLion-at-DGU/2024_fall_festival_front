import React from "react";
import * as S from "./itemstyle"; 
import noticeIcon from "../../../assets/images/NoticeIcon_Orange.svg"; 
import instaIcon from "../../../assets/images/instaIcon.png"; 

const NoticeItem = ({ title, content, onClick }) => {
    return (
        <S.MainNoticeBox onClick={onClick}> 
            <S.BoxTitle>
                <img src={noticeIcon} alt="공지 이미지" />
                <p id="mainNoticeTitle">{title}</p>
            </S.BoxTitle>
            <S.BoxContent>
                <p id="mainNoticeContent">{content}</p>
            </S.BoxContent>
            <S.InstaIcon>
                <img src={instaIcon} alt="인스타그램 아이콘" />
            </S.InstaIcon>
        </S.MainNoticeBox>
    );
};

export default NoticeItem;
