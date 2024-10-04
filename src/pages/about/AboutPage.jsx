import * as S from "./AboutPage.styled";
import { AboutCard } from "@components/about/AboutCard/AboutCard";
import { LikeLionLink } from "@components/about/LikeLionLink/LikeLionLink";
import { Review } from "@components/about/Review/Review";
export const AboutPage = () => {
  return (
    <S.MainWrapper>
      <LikeLionLink />
      <AboutCard />
      <Review />
    </S.MainWrapper>
  );
};
