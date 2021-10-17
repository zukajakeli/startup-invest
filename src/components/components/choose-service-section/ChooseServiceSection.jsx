import { useHistory } from 'react-router';
import ChooseServiceCard from '../choose-service-card/ChooseServiceCard';

import blueBackground from 'assets/icons/choose-service-blue.svg';
import pinkBackground from 'assets/icons/choose-service-pink.svg';

import * as S from './choose-service-sec-components';

const ChooseServiceSection = () => {
  const history = useHistory();
  const goToStartups = () => {
    history.push('/startups');
  };

  const goToBlogs = () => {
    history.push('/contact-us');
  };

  return (
    <S.Wrapper>
      <S.CardWrapper mobile>
        <ChooseServiceCard
          handleButtonClick={goToStartups}
          title="იყიდე წილი"
          info="აირჩიე შენთვის სასურველი შეთავაზება და გახდი სტარტაპის მეწილე მარტივად"
          buttonText="იხილე შეთავაზებები"
        />
        <S.PinkImage src={pinkBackground} alt="circle" />
      </S.CardWrapper>
      <S.CardWrapper>
        <ChooseServiceCard
          handleButtonClick={goToBlogs}
          title="მოიზიდე ინვესტიცია"
          info="მოიძიე დამატებიტი რესურსები მარტივად - მოგვიყევი შენი სტარტაპის შესახებ"
          buttonText="განათავსე შეთავაზება"
          forInvestors
        />
        <S.BlueImage src={blueBackground} alt="background" />
      </S.CardWrapper>
    </S.Wrapper>
  );
};

export default ChooseServiceSection;
