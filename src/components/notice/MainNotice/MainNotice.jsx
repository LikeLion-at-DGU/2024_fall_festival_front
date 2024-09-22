import React, { useState } from "react";
import * as S from "./MainStyle";
import NoticeItem from "./NoticeItem"; 
import Modal from "react-modal"; //모달 사용 라이브러리 !!!!
import Popup from "../Popup/Popup"; 

// react-modal의 루트 엘리먼트를 지정
Modal.setAppElement("#root");

const MainNotice = () => {
    const [mockData, setMockData] = useState([
        {
        title: "2024 동국대학교 가을 축제 안내!",
        content: "동대멋사에서 축제 사이트를 만들었습니다.",
        },
        {
        title: "동국대학교 공연 안내",
        content: "에스파 !! 뉴진스 !!",
        },
        {
        title: "축제가 취소되었습니다",
        content: "축제 일정이 변경되었습니다. 확인해주세요.",
        },
    ]);

    const [isPopupOpen, setIsPopupOpen] = useState(false); 
    const handleOpenPopup = () => {
        setIsPopupOpen(true); 
    };
    const handleClosePopup = () => {
        setIsPopupOpen(false); 
    };

    return (
        <S.MainNoticeWrapper>
        <S.MainTitle>주요 공지사항</S.MainTitle>
        {mockData.map((notice, index) => (
            <NoticeItem
            key={index}
            title={notice.title}
            content={notice.content}
            onClick={handleOpenPopup} 
            />
        ))}

        {/* 모달 창 팝업을 위해 react-modal 활용 */}
        <Modal
            isOpen={isPopupOpen}
            onRequestClose={handleClosePopup}
            style={{
            overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.6)", // 오버레이 투명도 조정
            },
            content: {
                top: "50%", // 세로 중앙
                left: "50%", // 가로 중앙
                right: "auto", // 오른쪽은 자동으로
                bottom: "auto", // 아래쪽은 자동으로
                transform: "translate(-50%, -50%)", // 중앙 정렬
                padding: 0, 
                border: "none", 
                background: "transparent", 
            },
            }}
        >
            <Popup onClose={handleClosePopup} /> {/* Popup 컴포넌트 */}
        </Modal>
        </S.MainNoticeWrapper>
    );
};

export default MainNotice;
