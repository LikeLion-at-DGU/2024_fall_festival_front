import React from "react";
import * as S from "./NoticePagestyle"; // styled-components를 불러옵니다
import MainNotice from "@components/notice/MainNotice/MainNotice"; // MainNotice 컴포넌트를 default로 가져옵니다
import NoticeList from "@components/notice/NoticeList/NoticeList";

export const NoticePage = () => {
    return (
        <S.Container>
            <div>header 자리 입니다.</div>
            <S.ContentWrapper> 
                <MainNotice />
                <NoticeList />
            </S.ContentWrapper>
        </S.Container>
    );
};
