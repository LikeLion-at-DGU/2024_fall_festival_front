import * as S from "./AboutPage.styled";
import { AboutCard } from "@components/about/AboutCard/AboutCard";
import { LikeLionLink } from "@components/about/LikeLionLink/LikeLionLink";
import { Review } from "@components/about/Review/Review";
import { TopBar } from "@components/topBar/TopBar";
import Footer from "@components/about/Footer";
import { Modal } from "@components/modal/Modal";
import React, { useState } from "react";
export const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <S.MainWrapper>
      <TopBar openModal={openModal} />
      <LikeLionLink />
      <AboutCard />
      <Footer />
      {isModalOpen && <Modal onClose={closeModal} />}
    </S.MainWrapper>
  );
};
