import LandingSection from '../../components/landing-section/LandingSection';
import BusinessSection from '../../components/business-section/BusinessSection';
import ChooseServiceSection from '../../components/choose-service-section/ChooseServiceSection';
import StoriesSection from '../../components/stories-section/StoriesSection';

import * as S from './main-page-component';
import SummarySection from '../../components/summary-section/SummarySection';
import Footer from '../../components/footer/Footer';
import Header from 'components/components/header/Header';
import { useState } from 'react';

const MainPage = () => {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);

  window.onscroll = () => {
    console.log(window.scrollY >= window.innerHeight);
    setIsHeaderTransparent(window.scrollY >= window.innerHeight);
  };

  return (
    <S.Wrapper>
      <S.HeaderWrapper isHeaderTransparent={isHeaderTransparent}>
        <Header />
      </S.HeaderWrapper>
      <LandingSection />
      <BusinessSection />
      <ChooseServiceSection />
      <StoriesSection />
      <SummarySection />
      <Footer />
    </S.Wrapper>
  );
};

export default MainPage;
