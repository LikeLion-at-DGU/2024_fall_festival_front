import React, { useEffect, useState } from 'react';
import * as H from '../../styles/HeaderStyle';

export const DateBar = () => {
    const [whatDate, setWhatDate] = useState('day7');
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = window.pageYOffset;

    // 현재 날짜에 따라 디폴트 선택 상태 설정
    useEffect(() => {
        const currentDate = new Date(); // 현재 날짜
        const referenceDate = new Date('2024-10-08'); // 기준 날짜: 10월 8일

        // 10월 8일 이전이면 day7, 이후면 day8 선택
        if (currentDate < referenceDate) {
            setWhatDate('day7');
        } else {
            setWhatDate('day8');
        }
    }, []);

    // 버튼 클릭 시 상태 변경
    const handleDate = (day) => {
        setWhatDate(day);
    };

    // 스크롤 방향에 따라 컴포넌트 보이기/숨기기
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;

            // 스크롤을 아래로 내릴 때 컴포넌트가 보이도록, 위로 올릴 때 숨기도록 설정
            if (currentScrollY > lastScrollY) {
                setIsVisible(false); // 스크롤을 아래로 내리면 숨김
            } else {
                setIsVisible(true); // 스크롤을 위로 올리면 표시
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 리스너 등록

        return () => {
            window.removeEventListener('scroll', handleScroll); // 컴포넌트 언마운트 시 리스너 제거
        };
    }, []);


    return (
        <>
            <H.DateBox
              isVisible={isVisible}
            >
                <H.DateButton
                    onClick={() => handleDate('day7')}
                    isSelected={whatDate === 'day7'}
                >
                    10/7(월)
                </H.DateButton>
                <H.DateButton
                    onClick={() => handleDate('day8')}
                    isSelected={whatDate === 'day8'}
                >
                    10/8(화)</H.DateButton>
            </H.DateBox>
        </>
    );
};
