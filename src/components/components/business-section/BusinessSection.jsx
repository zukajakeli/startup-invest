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
// import { startupsDummy as startupsArray } from '../../common-components/StartupsDummyArray';
import { useEffect } from 'react';
import { getMainpageStartups } from 'config/API';
import { useState } from 'react';

const BusinessSection = () => {
  SwiperCore.use([Pagination]);

  const history = useHistory();
  const goToStartups = () => {
    history.push('/startups');
  };

  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  const [startupsArray, setStartupsArray] = useState([]);
  useEffect(() => {
    getMainpageStartups().then((res) => {
      console.log(res.data.startups);
      setStartupsArray(res.data.startups);
    });
  }, []);

  // console.log(startupsArray);

  return (
    <>
      {!!startupsArray.length && (
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
                  {
                    title,
                    sharePrice,
                    share,
                    outsideText,
                    previewPhoto,
                    logoPhoto,
                    _id,
                    category,
                  },
                  index,
                ) => {
                  return (
                    index < 3 && (
                      <StartupCard
                        key={`startup${_id}`}
                        title={title}
                        sharePrice={sharePrice}
                        share={share}
                        previewText={outsideText}
                        previewPhoto={previewPhoto}
                        logoPhoto={logoPhoto}
                        category={category}
                        id={_id}
                      />
                    )
                  );
                },
              )
            ) : startupsArray.length <= 3 ? (
              <S.Flex>
                {startupsArray.map((statup) => {
                  return (
                    <StartupCard
                      key={`startup${statup._id}`}
                      title={statup.title}
                      sharePrice={statup.sharePrice}
                      share={statup.share}
                      previewText={statup.outsideText}
                      previewPhoto={statup.previewPhoto}
                      logoPhoto={statup.logoPhoto}
                      category={statup.category}
                      _id={statup._id}
                    />
                  );
                })}
              </S.Flex>
            ) : (
              <Swiper
                spaceBetween={100}
                slidesPerView={3}
                direction="horizontal"
                pagination
              >
                {startupsArray.map(
                  ({
                    title,
                    sharePrice,
                    share,
                    outsideText,
                    previewPhoto,
                    logoPhoto,
                    category,
                    _id,
                  }) => {
                    return (
                      <SwiperSlide key={`startup${_id}`}>
                        <StartupCard
                          key={`startup${_id}`}
                          title={title}
                          sharePrice={sharePrice}
                          share={share}
                          previewText={outsideText}
                          previewPhoto={previewPhoto}
                          logoPhoto={logoPhoto}
                          category={category}
                          id={_id}
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
      )}
    </>
  );
};

export default BusinessSection;
