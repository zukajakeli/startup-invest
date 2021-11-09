import { useHistory } from 'react-router';

import * as S from './summary-sec-components';

import backgroundImage from '../../../assets/images/summary-background.svg';
import arrow from '../../../assets/icons/arrow-curly-pink.svg';
import yellowHalfCircle from 'assets/icons/half-circle-yellow.svg';

const SummarySection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const history = useHistory();
  const goToStartups = () => {
    history.push('/startups');
  };

  const goToBlogs = () => {
    history.push('/blogs');
  };

  return (
    <S.Wrapper>
      <S.BackgroundWrapper>
        <S.BackgroundImage src={backgroundImage} alt="background" />
        <S.PinkButton onClick={goToStartups}>იყიდე წილი</S.PinkButton>
        <S.Relative>
          <S.HalfCircle src={yellowHalfCircle} alt="yellow" />
          <S.GreenButton onClick={goToBlogs}>მოიზიდე ინვესტიცია</S.GreenButton>
        </S.Relative>
        <S.ArrowImage src={arrow} alt="arrow" onClick={scrollToTop} />
      </S.BackgroundWrapper>
    </S.Wrapper>
  );
};

export default SummarySection;
