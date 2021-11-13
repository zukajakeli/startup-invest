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
import { useEffect } from 'react';
import { getAllStartups } from 'config/API';
import { useState } from 'react';

const StartupPage = () => {
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] =
    useContext(AuthDropdownContext);
  const [meInfo, setMeInfo] = useContext(MeContext);

  const openAuthModal = () => {
    setIsAuthDropdownOpen(true);
  };

  const [startupsData, setStartupsData] = useState([]);
  useEffect(() => {
    getAllStartups().then((res) => {
      console.log(res.data);
      setStartupsData(res.data);
    });
  }, []);

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
          {startupsData.map(
            ({
              previewPhoto,
              logoPhoto,
              sharePrice,
              share,
              title,
              previewText,
              category,
              _id,
            }) => {
              return (
                <StartupCard
                  key={`startup${_id}`}
                  title={title}
                  share={share}
                  sharePrice={sharePrice}
                  previewText={previewText}
                  previewPhoto={previewPhoto}
                  logoPhoto={logoPhoto}
                  _id={_id}
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
