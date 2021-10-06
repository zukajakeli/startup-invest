import backgroundImage from "../../../assets/images/landing-background.png";
import circleBlue from "../../../assets/icons/circle-blue.svg";
import Header from "../header/Header.jsx";

import * as S from "./landing-section-components";

const LandingSection = () => {
  return (
    <S.Wrapper>
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
