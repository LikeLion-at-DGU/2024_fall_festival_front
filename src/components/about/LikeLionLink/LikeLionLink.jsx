import * as S from "./styled";
import LionLogo from "../../../assets/images/Logo.png"; 
import LinkImg from "../../../assets/images/LinkImg.svg"; 

export const LikeLionLink = () => {
  return (
    <>
    <S.Intro><S.IntroLine/>개발자 정보</S.Intro>
    <S.MainWrapper>
      <S.Photo src={LionLogo} alt={LionLogo} />
      <S.MentPlusLink>
        <S.AllMent>
          <S.MainMent>동국대학교</S.MainMent>
          <S.SubMent>멋쟁이사자처럼</S.SubMent>
        </S.AllMent>
        <a href="https://likelion-dgu.com/" style={{ textDecoration: 'none' }}>
        <S.Link>
          <S.LinkMent>사이트 바로가기</S.LinkMent>
          <S.LinkImg src={LinkImg} alt={LinkImg} />
        </S.Link>
        </a>
      </S.MentPlusLink>
    </S.MainWrapper>
    </>
  );
};
