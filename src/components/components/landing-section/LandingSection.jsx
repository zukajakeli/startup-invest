import { useHistory } from 'react-router';

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

  const history = useHistory();
  const goToStartups = () => {
    history.push('/startups');
  };

  return (
    <S.Wrapper>
      <S.Arrow src={arrow} alt="arrow" onClick={scrollDown} />
      <S.Circle src={circleGreen} alt="circle" />
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.Content>
        <S.Heading>
          გახდი სტარტაპის მეწილე - დააბანდე ფული სწრაფად მზარდ ბიზნესში
        </S.Heading>
        <S.SubHeading>
          იპოვე შენთვის საინტერესო წინადადება და აქციე შესაძლებლობა - გონივრულ
          ინვესტიციად
        </S.SubHeading>
        <S.ButtonsWrapper>
          <S.Button onClick={goToStartups}>შეიძინე წილი</S.Button>
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
