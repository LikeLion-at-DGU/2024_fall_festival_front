import React, { useState } from "react";
import * as S from "./noticeStyle";
import ListBox from "./ListBox";
import Modal from "react-modal";
import Popup from "../Popup/Popup"; // 모달에 표시할 Popup 컴포넌트

// react-modal의 루트 엘리먼트를 지정
Modal.setAppElement("#root");

const NoticeList = () => {
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
            {
            title: "축제가 취소되었습니다",
            content: "축제 일정이 변경되었습니다. 확인해주세요.",
            },
            {
            title: "축제가 취소되었습니다",
            content: "축제 일정이 변경되었습니다. 확인해주세요.",
            },
            {
            title: "축제가 취소되었습니다",
            content: "축제 일정이 변경되었습니다. 확인해주세요.",
            },
            {
            title: "축제가 취소되었습니다",
            content: "축제 일정이 변경되었습니다. 확인해주세요.",
            },
            {
            title: "축제가 취소되었습니다",
            content: "축제 일정이 변경되었습니다. 확인해주세요.",
            },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
    const [selectedNotice, setSelectedNotice] = useState(null); // 선택된 공지 저장

    // 모달을 여는 함수
    const handleOpenModal = (notice) => {
        setSelectedNotice(notice); // 선택된 공지 설정
        setIsModalOpen(true); // 모달 열기
    };

    // 모달을 닫는 함수
    const handleCloseModal = () => {
        setIsModalOpen(false); // 모달 닫기
    };

    return (
        <S.ListWrapper>
            <S.ListTitle>
                <p id="h1">공지사항 목록</p>
                <p id="h3">공지를 클릭하면 축제기획단 인스타그램으로 연결됩니다.</p>
            </S.ListTitle>

            {mockData.map((notice, index) => (
                <ListBox
                    key={index}
                    title={notice.title}
                    content={notice.content}
                    onClick={() => handleOpenModal(notice)} // 클릭 시 모달 열기
                />
            ))}

            {/* Modal 컴포넌트 */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                    },
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        transform: "translate(-50%, -50%)",
                        padding: 0,
                        border: "none",
                        background: "transparent",
                    },
                }}
            >
                <Popup onClose={handleCloseModal} /> {/* 모달에 Popup 컴포넌트 표시 */}
            </Modal>
        </S.ListWrapper>
    );
};

export default NoticeList;
