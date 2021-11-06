import Header from '../../components/header/Header';
import StartupCard from '../../components/startup-card/StartupCard';
import Footer from '../../components/footer/Footer';
import BlurredStartups from '../../components/blurred-startups/BlurredStatups';
import SubscribeOffer from '../../common-components/subscribe-offer/SubscribeOffer';

import { startupsDummy } from '../../common-components/StartupsDummyArray';
import ovalBlue from '../../../assets/icons/oval-blue.svg';
import ovalPink from '../../../assets/icons/oval-pink.svg';
import { ReactComponent as Arch } from '../../../assets/icons/arch.svg';

import * as S from './startup-page-components';
import { useContext } from 'react';
import { AuthDropdownContext } from 'contexts/AuthDropdownContext';
import { MeContext } from 'contexts/MeContext';

const StartupPage = () => {
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] =
    useContext(AuthDropdownContext);
  const [meInfo, setMeInfo] = useContext(MeContext);

  const openAuthModal = () => {
    setIsAuthDropdownOpen(true);
  };

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.Body>
        <S.HeadingsWrapper>
          <S.Heading>სტარტაპ შეთავაზებები</S.Heading>
          <S.SubHeading>
            შეიძინე წილი სტარტაპ შეთავაზებების ყველაზე დიდ პლატფორმაზე
          </S.SubHeading>
        </S.HeadingsWrapper>

        <S.StartupsWrapper>
          {startupsDummy.map(
            (
              { startupName, goal, raised, startupInfo, image, logo },
              index,
            ) => {
              return (
                <StartupCard
                  key={`startup${index}`}
                  startupName={startupName}
                  goal={goal}
                  raised={raised}
                  startupInfo={startupInfo}
                  image={image}
                  logo={logo}
                />
              );
            },
          )}
        </S.StartupsWrapper>
        {!meInfo && (
          <S.BlurredWrapper>
            <BlurredStartups openAuthModal={openAuthModal} />
          </S.BlurredWrapper>
        )}

        <SubscribeOffer
          inputColor="#9AB7FF"
          arrowColor="#FE7760"
          cicrcleColor="#FE7760"
        />

        {/* position absolute elements */}
        <S.OvalBlueWrapper src={ovalBlue} alt="oval" />
        <S.OvalPinkWrapper src={ovalPink} alt="oval" />
        {!meInfo && (
          <S.ArchWrapper>
            <Arch fill="#FFCA0F" />
          </S.ArchWrapper>
        )}
      </S.Body>
      <Footer />
    </S.Wrapper>
  );
};

export default StartupPage;
