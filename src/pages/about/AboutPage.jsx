import * as S from "./AboutPage.styled";
import { AboutCard } from "@components/about/AboutCard/AboutCard";
import { LikeLionLink } from "@components/about/LikeLionLink/LikeLionLink";
import { Review } from "@components/about/Review/Review";
import { BoothDetail } from "@components/common/BoothDetail/BoothDetail";
export const AboutPage = () => {
  return (
    <S.MainWrapper>
      <BoothDetail />
      <LikeLionLink />
      <AboutCard />
      <Review />
    </S.MainWrapper>
  );
};
