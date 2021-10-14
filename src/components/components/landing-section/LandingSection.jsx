import backgroundImage from '../../../assets/images/landing-background.png';
import circleBlue from '../../../assets/icons/circle-blue.svg';
import Header from '../header/Header.jsx';

import arrow from 'assets/icons/arrow-curly-pink.svg';
import circleGreen from 'assets/icons/circle-green.svg';

import * as S from './landing-section-components';

const LandingSection = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: 768,
      behavior: 'smooth',
    });
  };

  return (
    <S.Wrapper>
      <S.Arrow src={arrow} alt="arrow" onClick={scrollDown} />
      <S.Circle src={circleGreen} alt="circle" />
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.Content>
        <S.Heading>შეუძლებელია ვერ შეამჩნიოთ რა ხდება საქართველოში</S.Heading>
        <S.SubHeading>
          ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
          მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე…
        </S.SubHeading>
        <S.ButtonsWrapper>
          <S.Button>დაიწყე ინვესტირება</S.Button>
          <S.LearnMoreWrapper>
            <S.CircleImage src={circleBlue} />
            <S.LearnMore>გაიგე მეტი</S.LearnMore>
          </S.LearnMoreWrapper>
        </S.ButtonsWrapper>
      </S.Content>

      <S.BackgroundImage src={backgroundImage} />
    </S.Wrapper>
  );
};

export default LandingSection;
