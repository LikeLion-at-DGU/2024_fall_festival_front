import * as S from "./Styled";
import X from "../../assets/images/X.svg";

export const Modal = ({ onClose }) => {
  const handleReviewClick = () => {
    window.location.href = "https://naver.me/5mIX3maX";
  };
  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <S.CloseButton onClick={onClose}>
          <img src={X} alt="닫기" />
        </S.CloseButton>
        <S.ModalHeader>
          2024 동국대학교 가을축제 부스 서비스
          <span class="B"> 부스끼리</span>
        </S.ModalHeader>
        <S.ModalLine /> {/* 선 추가 */}
        <S.ModalText>
          서비스 이용은 어떠셨나요?
          <br />
          <span class="Bold">
            사이트 경험에 대한 후기를 남겨주세요!
          </span>
        </S.ModalText>
        <S.ButtonWrapper>
          <S.ReviewButton onClick={handleReviewClick}>
            후기 남기러 가기
          </S.ReviewButton>
          <S.LaterButton onClick={onClose}>
            나중에 진행하기
          </S.LaterButton>
        </S.ButtonWrapper>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};
