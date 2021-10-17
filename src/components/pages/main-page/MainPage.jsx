import LandingSection from '../../components/landing-section/LandingSection';
import BusinessSection from '../../components/business-section/BusinessSection';
import ChooseServiceSection from '../../components/choose-service-section/ChooseServiceSection';
import StoriesSection from '../../components/stories-section/StoriesSection';

import * as S from './main-page-component';
import SummarySection from '../../components/summary-section/SummarySection';
import Footer from '../../components/footer/Footer';

const MainPage = () => {
  return (
    <S.Wrapper>
      <LandingSection />
      <BusinessSection />
      <ChooseServiceSection />
      <StoriesSection />
      {/* <SummarySection />
      <Footer /> */}
    </S.Wrapper>
  );
};

export default MainPage;
