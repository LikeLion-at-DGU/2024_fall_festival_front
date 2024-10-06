import React, { useState, useEffect } from "react";
import * as S from "./styled";
import Mainicon from "../../assets/images/Mainicon.png";
import Leaf1 from "../../assets/images/leaf/leaf1.png";
import Leaf2 from "../../assets/images/leaf/leaf2.png";
import Leaf3 from "../../assets/images/leaf/leaf3.png";

export const TopBar = ({ openModal }) => {
  const [leaves, setLeaves] = useState([]);

  // 랜덤한 Leaf 이미지를 생성하는 함수
  const generateRandomLeaves = () => {
    const leafTypes = [Leaf1, Leaf2, Leaf3];
    const randomLeaves = [];

    leafTypes.forEach((leaf, index) => {
      const leafCount = Math.floor(Math.random() * 5) + 1;
      for (let i = 0; i < leafCount; i++) {
        const size = Math.floor(Math.random() * 11) + 15;
        const left = Math.floor(Math.random() * 100);
        const duration = Math.random() * 3 + 5;
        const delay = Math.random() * 2;

        randomLeaves.push({
          src: leaf,
          size: size,
          left: `${left}%`,
          duration: `${duration}s`,
          delay: `${delay}s`,
          key: `${index}-${i}`,
        });
      }
    });

    return randomLeaves;
  };

  useEffect(() => {
    setLeaves(generateRandomLeaves());
  }, []);

  return (
    <S.Background>
      <S.MainText>동국대학교 가을축제 부스사이트</S.MainText>
      <S.MainLogo src={Mainicon} onClick={openModal} />

      {/* 랜덤으로 생성된 Leaves 출력 */}
      {leaves.map((leaf) => (
        <S.Leaves
          key={leaf.key}
          src={leaf.src}
          $size={leaf.size}
          $left={leaf.left}
          $duration={leaf.duration}
          $delay={leaf.delay}
        />
      ))}
    </S.Background>
  );
};
