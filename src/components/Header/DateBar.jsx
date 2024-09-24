import React, { useEffect, useState } from 'react';
import * as H from '../../styles/HeaderStyle';

export const DateBar = ({ isVisible }) => {
    const [whatDate, setWhatDate] = useState('day7');

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


    return (
        <>
            <H.DateBox isVisible={isVisible}>
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
