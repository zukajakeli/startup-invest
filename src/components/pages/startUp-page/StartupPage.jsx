import Header from '../../components/header/Header';
import * as S from './startup-page-components';

import { startupsDummy } from '../../common-components/StartupsDummyArray';
import StartupCard from '../../components/startup-card/StartupCard';
import Footer from '../../components/footer/Footer';
import SubscribeOffer from '../../common-components/subscribe-offer/SubscribeOffer';

const StartupPage = () => {
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

        <SubscribeOffer
          inputColor="#9AB7FF"
          arrowColor="#FE7760"
          cicrcleColor="#FE7760"
        />
      </S.Body>

      <Footer />
    </S.Wrapper>
  );
};

export default StartupPage;
