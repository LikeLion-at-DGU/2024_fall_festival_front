import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as H from '../../styles/HeaderStyle';
import GlobalStyle from '../../styles/global';

export const Header = () => {
    const location = useLocation(); // 현재 URL 경로를 가져옴
    const [headerText, setHeaderText] = useState({ title: '메인', description: 'main' }); // 헤더 텍스트 상태 관리

    // URL 경로에 따라 다른 헤더 텍스트 반환
    const getHeaderText = (pathname) => {
        switch (pathname) {
            case '/performance':
                return { title: '공연', description: 'performance' };
            case '/':
                return { title: '메인', description: '메인페이지입니다.' };
            default:
                return { title: '알 수 없는 페이지', description: '아직 정의되지 않은 페이지입니다.' };
        }
    };

    // URL이 변경될 때마다 헤더 텍스트를 업데이트
    useEffect(() => {
        const updatedText = getHeaderText(location.pathname);
        setHeaderText(updatedText);
    }, [location.pathname]); // location.pathname이 변경될 때마다 실행됨


    return (
        <>
            <H.Header>
                {/* <GlobalStyle /> */}
                <H.TextBox>
                    <H.CustomHeading>{headerText.title}</H.CustomHeading> {/* 동적으로 변경된 제목 */}
                    <H.CustomP>{headerText.description}</H.CustomP> {/* 동적으로 변경된 설명 */}
                </H.TextBox>
            </H.Header>
        </>
    );
};
