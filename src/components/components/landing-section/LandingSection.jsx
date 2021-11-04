import { useHistory } from 'react-router';
import { useMediaQuery } from 'react-responsive';

import backgroundImage from '../../../assets/images/landing-background.svg';
import backgroundImageMobile from 'assets/images/landing-background-mobile.svg';
import circleBlue from '../../../assets/icons/circle-blue.svg';
import Header from '../header/Header.jsx';

import { ReactComponent as Background } from 'assets/images/landing-background.svg';

import arrow from 'assets/icons/arrow-curly-pink.svg';

import * as S from './landing-section-components';

const LandingSection = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const history = useHistory();
  const goToStartups = () => {
    history.push('/startups');
  };

  const goToAbout = () => {
    history.push('/about-us');
  };

  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const innerHeight = window.innerHeight;

  const backgroundImageWidth =
    document.getElementById('background-image')?.offsetWidth;

  console.log(backgroundImageWidth);

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.ContentAndImage>
        <S.Content>
          {/* <S.LogoMobile src={logo} alt="logo" /> */}
          <S.Heading>
            გახდი სტარტაპის მეწილე - დააბანდე ფული სწრაფად მზარდ ბიზნესში
          </S.Heading>
          <S.SubHeading>
            იპოვე შენთვის საინტერესო წინადადება და აქციე შესაძლებლობა - გონივრულ
            ინვესტიციად
          </S.SubHeading>
          <S.ButtonsWrapper>
            <S.Button onClick={goToStartups}>შეიძინე წილი</S.Button>
            <S.LearnMoreWrapper onClick={goToAbout}>
              <S.CircleImage src={circleBlue} />
              <S.LearnMore>გაიგე მეტი</S.LearnMore>
            </S.LearnMoreWrapper>
          </S.ButtonsWrapper>
        </S.Content>

        <S.BackgroundWrapper>
          <S.BackgroundImage
            id="background-image"
            src={isMobile ? backgroundImageMobile : backgroundImage}
          />
          <S.Arrow
            src={arrow}
            alt="arrow"
            onClick={scrollDown}
            innerHeight={innerHeight}
          />
        </S.BackgroundWrapper>
      </S.ContentAndImage>
    </S.Wrapper>
  );
};

export default LandingSection;
