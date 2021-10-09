import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './swiper.css';

import StartupCard from '../startup-card/StartupCard';

import * as S from './business-section-components';
import backgroundImage from '../../../assets/images/business-section-background.svg';
import { ReactComponent as Arrow } from '../../../assets/images/arrow.svg';
import { startupsDummy } from '../../common-components/StartupsDummyArray';

const BusinessSection = () => {
  SwiperCore.use([Pagination]);

  return (
    <S.Wrapper>
      <S.BackgroundImage src={backgroundImage} />
      <S.Header>
        <S.TextsWrapper>
          <S.Heading>ბიზნესი ინვესტორებისთვის</S.Heading>
          <S.SubHeading>
            ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
            მოყვა, ერთ ღონისძიებას მეორე
          </S.SubHeading>
        </S.TextsWrapper>
        <S.AllCompanyButton>
          ყველა კომპანია
          <Arrow />
        </S.AllCompanyButton>
      </S.Header>

      <S.Body>
        <Swiper
          spaceBetween={100}
          slidesPerView={3}
          direction="horizontal"
          pagination
        >
          {startupsDummy.map(
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
      </S.Body>
    </S.Wrapper>
  );
};

export default BusinessSection;
