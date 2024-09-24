import * as S from "./styled";
import { useState } from "react";
import FireSvg from "../../../assets/images/Fire.svg";
const Fire = ({}) => {
  const [isClicked, setIsClicked] = useState(false); // 클릭 상태 관리
  const [count, setCount] = useState(0); // 클릭 시 증가할 숫자 상태 임시로구현 실제로는 백과연결
  const [fires, setFires] = useState([]); // 불 이모지 배열 상태 관리
  const handleClick = () => {
    if (!isClicked) {
      // 클릭이 한 번만 가능하도록 설정
      setCount(count + 1); // 숫자를 1씩 증가
      //   setIsClicked(true); // 클릭 상태를 true로 변경해 더 이상 클릭 불가
      generateFires(); // 불 이모지 애니메이션 시작
    }
  };

  const generateFires = () => {
    const newFires = [];
    for (let i = 0; i < 5; i++) {
      // 5개의 불 이모지 생성
      newFires.push({
        id: i,
        left: Math.random() * 20, // 불 이모지의 x 좌표를 랜덤으로 설정 (오른쪽 아래 기준)
        size: Math.random() * 20 + 20, // 불 이모지의 크기를 랜덤으로 설정
        duration: Math.random() * 2 + 1, // 애니메이션 지속 시간을 랜덤으로 설정
      });
    }
    setFires(newFires); // 새로운 불 이모지들을 추가

    // 2초 후 불 이모지 애니메이션을 숨김
    setTimeout(() => {
      setFires([]);
    }, 2000);
  };
  return (
    <S.Container>
      <S.Contents>
        <S.FireBtn onClick={handleClick} isClicked={isClicked}>
          <img src={FireSvg} alt={"불 이모티콘"} />
          <div class="FireCount">{count}</div>
        </S.FireBtn>
        <div class="comment">함께 축제의 열기를 즐겨보세요!</div>
      </S.Contents>

      {/* 여러 개의 불 이모지 애니메이션 */}
      {fires.map((fire) => (
        <S.Fire
          key={fire.id}
          left={fire.left}
          size={fire.size}
          duration={fire.duration}
        >
          <img src={FireSvg} alt="불 이모지" />
        </S.Fire>
      ))}
    </S.Container>
  );
};

export default Fire;
