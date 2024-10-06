import { useNavigate } from "react-router-dom";
import { Review } from "@components/about/Review/Review";
// import github from "@assets/img/github.svg"
import github from "../../assets/img/github.svg";
import Develop from "../../assets/img/Developers.svg";
import insta from "../../assets/img/instagram.svg";
import * as F from "./FooterStyle";
import * as S from "@pages/about/AboutPage.styled";

const Footer = () => {
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate("/about");
  };

  const goToGithub = () => {
    window.open("https://github.com/LikeLion-at-DGU", "_blank"); // 새로운 탭에서 GitHub 열기
  };

  const goToInstagram = () => {
    window.open("https://www.instagram.com/likelion_dongguk/", "_blank"); // 새로운 탭에서 Instagram 열기
  };

  return (
    <F.Footer>
      <Review />
      <p id="copy">
        Copyright ⓒ 2024. 동국대학교 멋쟁이사자처럼 All rights reserved.
      </p>

      <F.ButtonBar>
        <button onClick={goToGithub}>
          <img src={github} />
          <span>Github</span>
        </button>

        <button onClick={goToAboutPage}>
          <img src={Develop} />
          <span> Developers</span>
        </button>

        <button onClick={goToInstagram}>
          <img src={insta} />
          <span> Instagram</span>
        </button>
      </F.ButtonBar>
    </F.Footer>
  );
};

export default Footer;
