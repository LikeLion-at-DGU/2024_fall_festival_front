import * as S from "./styled";
import FormLink from "../../../assets/images/formlink.svg";

//폼 링크로 바꿔서 연결해야합니다

export const Review = () => {
  return (
    <S.MainWrapper>
      <S.MentPlusLink>
        <S.MainMent>사이트 경험에 대한 후기를 남겨주세요!</S.MainMent>
        <a
          href="https://form.naver.com/response/EqUwfuoUzEp24ZemAVHB8w"
          style={{ textDecoration: "none" }}
        >
          <S.Link>
            <S.LinkMent>후기 남기기</S.LinkMent>
            <S.LinkImg src={FormLink} alt={FormLink} />
          </S.Link>
        </a>
      </S.MentPlusLink>
    </S.MainWrapper>
  );
};
