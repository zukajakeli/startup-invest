import LandingSection from "../../components/landing-section/LandingSection";
import BusinessSection from "../../components/business-section/BusinessSection";
import ChooseServiceSection from "../../components/choose-service-section/ChooseServiceSection";
import StoriesSection from "../../components/stories-section/StoriesSection";

import * as S from "./main-page-component";

const MainPage = () => {
  return (
    <S.Wrapper>
      <LandingSection />
      <BusinessSection />
      <ChooseServiceSection />
      <StoriesSection />
    </S.Wrapper>
  );
};

export default MainPage;
