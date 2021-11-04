import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './swiper.css';

import { useHistory } from 'react-router';
import { useMediaQuery } from 'react-responsive';

import StartupCard from '../startup-card/StartupCard';

import * as S from './business-section-components';
import backgroundImage from '../../../assets/images/business-section-background.svg';
import { ReactComponent as Arrow } from '../../../assets/images/arrow.svg';
import { ReactComponent as Oval } from 'assets/icons/oval-green.svg';
import ovalGreen from 'assets/icons/oval-green.svg';
import ovalPink from 'assets/icons/oval-orange.svg';
import { startupsDummy as startupsArray } from '../../common-components/StartupsDummyArray';

const BusinessSection = () => {
  SwiperCore.use([Pagination]);

  const history = useHistory();
  const goToStartups = () => {
    history.push('/startups');
  };

  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <S.Wrapper>
      {/* <S.BackgroundImage src={backgroundImage} /> */}
      <S.Header>
        <S.TextsWrapper>
          <S.Heading>სტარტაპ შეთავაზებები</S.Heading>
          <S.SubHeading>
            შეიძინე წილი სტარტაპ შეთავაზებების ყველაზე დიდ პლატფორმაზე
          </S.SubHeading>
        </S.TextsWrapper>
        {!isMobile && (
          <S.AllCompanyButton onClick={goToStartups}>
            ყველა შეთავაზება
            <Arrow />
          </S.AllCompanyButton>
        )}
      </S.Header>

      <S.Body>
        {isMobile ? (
          startupsArray.map(
            (
              { startupName, goal, raised, startupInfo, image, logo },
              index,
            ) => {
              return (
                index < 3 && (
                  <StartupCard
                    key={`startup${index}`}
                    startupName={startupName}
                    goal={goal}
                    raised={raised}
                    startupInfo={startupInfo}
                    image={image}
                    logo={logo}
                  />
                )
              );
            },
          )
        ) : startupsArray.length <= 3 ? (
          <S.Flex>
            {startupsArray.map(
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
          </S.Flex>
        ) : (
          <Swiper
            spaceBetween={100}
            slidesPerView={3}
            direction="horizontal"
            pagination
          >
            {startupsArray.map(
              (
                { startupName, goal, raised, startupInfo, image, logo },
                index,
              ) => {
                return (
                  <SwiperSlide key={`startup${index}`}>
                    <StartupCard
                      startupName={startupName}
                      goal={goal}
                      raised={raised}
                      startupInfo={startupInfo}
                      image={image}
                      logo={logo}
                    />
                  </SwiperSlide>
                );
              },
            )}
          </Swiper>
        )}
      </S.Body>
      {isMobile && (
        <S.AllCompanyButton onClick={goToStartups}>
          ყველა შეთავაზება
          <Arrow />
        </S.AllCompanyButton>
      )}

      <S.OvalGreen src={ovalGreen} alt="oval" />
      <S.OvalPink src={ovalPink} alt="oval" />
      {/* <Oval fill="#55AA79" /> */}
      {/* <S.OvalMobile src={oval} /> */}
    </S.Wrapper>
  );
};

export default BusinessSection;
