import * as S from "./Styled";
import X from "../../assets/images/X.svg";
import { useNavigate } from "react-router-dom";
export const Modal = ({ onClose }) => {
  const handleReviewClick = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSczzNv2Mf0i_HEhDlfQVkmKK-WZ8VlkHbBes6eOYxFQDXj2dg/viewform?usp=sf_link";
  };
  const navigate = useNavigate();
  const homeClick = () => {
    onClose(); //모달먼저 닫고
    navigate("/"); // 경로가 ""인 홈화면으로 이동
  };
  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <S.CloseButton onClick={onClose}>
          <img src={X} alt="닫기" />
        </S.CloseButton>
        <S.ModalHeader>
          2024 동국대학교 가을축제 부스 서비스
          <span className="B"> 부스끼리</span>
        </S.ModalHeader>
        <S.ModalLine /> {/* 선 추가 */}
        <S.ModalText>
          서비스 이용은 어떠셨나요?
          <br />
          <span className="Bold">
            사이트 경험에 대한 후기를 남겨주세요!
          </span>
        </S.ModalText>
        <S.ButtonWrapper>
          <S.ReviewButton onClick={handleReviewClick}>
            후기 남기러 가기
          </S.ReviewButton>
          <S.LaterButton onClick={homeClick}>
            홈 화면으로 가기
          </S.LaterButton>
        </S.ButtonWrapper>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};
