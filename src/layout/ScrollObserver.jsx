import { useEffect, useState } from "react";

const ScrollObserver = ({ onScroll }) => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.pageYOffset;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // 스크롤을 아래로 내리면 숨김
      } else {
        setIsVisible(true); // 스크롤을 위로 올리면 표시
      }

      lastScrollY = currentScrollY;
      onScroll(isVisible); // 스크롤 상태를 부모 컴포넌트에 전달
    };

    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 리스너 등록

    return () => {
      window.removeEventListener("scroll", handleScroll); // 컴포넌트 언마운트 시 리스너 제거
    };
  }, [isVisible, onScroll]);

  return null; //
};

export default ScrollObserver;
