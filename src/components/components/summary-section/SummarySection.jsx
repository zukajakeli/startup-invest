import * as S from './summary-sec-components';

import backgroundImage from '../../../assets/images/summary-background.svg';
import arrow from '../../../assets/icons/arrow-curly-pink.svg';

const SummarySection = () => {
  return (
    <S.Wrapper>
      <S.BackgroundWrapper>
        <S.BackgroundImage src={backgroundImage} alt="background" />
        <S.PinkButton>განათავსე სტარტაპი</S.PinkButton>
        <S.GreenButton>აღმოაჩინე სტარტაპი</S.GreenButton>
        <S.ArrowImage src={arrow} alt="arrow" />
      </S.BackgroundWrapper>
    </S.Wrapper>
  );
};

export default SummarySection;
