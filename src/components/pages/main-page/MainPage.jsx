import * as S from "./main-page-component";
import Header from "../../components/header/Header";
import LandingSection from "../../components/landing-section/LandingSection";
import BusinessSection from "../../components/business-section/BusinessSection";

const MainPage = () => {
  return (
    <S.Wrapper>
      <LandingSection />
      <BusinessSection />
    </S.Wrapper>
  );
};

export default MainPage;
