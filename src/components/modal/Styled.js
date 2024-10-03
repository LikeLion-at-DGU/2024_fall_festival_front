import styled from "styled-components";
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  max-width: 400px; /* 모달 최대 너비 */
  height: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalHeader = styled.h2`
  color: var(--, #5f5f5f);
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px; /* 150% */
  .B {
    color: var(--, #5f5f5f);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
  }
`;

export const ModalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0;
`;

export const ModalText = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
  color: var(--, #000);
  .Bold {
    font-weight: 700;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  gap: 10px;
`;

export const ReviewButton = styled.button`
  display: flex;
  width: 45%;
  height: 26px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #ff9957;
  color: #fff;
  font-size: 12px;
`;

export const LaterButton = styled.button`
  display: flex;
  width: 45%;
  height: 26px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #efefef;
  color: var(--, #5f5f5f);
  font-size: 12px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 15px;
    height: 15px;
  }
`;
