import * as S from "./AboutPage.styled";
import { AboutCard } from "@components/about/AboutCard/AboutCard";
import { LikeLionLink } from "@components/about/LikeLionLink/LikeLionLink";
import { Review } from "@components/about/Review/Review";
import { TopBar } from "@components/topBar/TopBar";
import Footer from "@components/about/Footer";

export const AboutPage = () => {
  return (
    <S.MainWrapper>
      < TopBar />
      <LikeLionLink />
      <AboutCard />
      <Footer />
    </S.MainWrapper>
  );
};
