import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.css";

import StartupCard from "../startup-card/StartupCard";

import * as S from "./business-section-components";
import backgroundImage from "../../../assets/images/business-section-background.svg";

const BusinessSection = () => {
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
        <S.AllCompanyButton>ყველა კომპანია</S.AllCompanyButton>
      </S.Header>

      <S.Body>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          direction="horizontal"
        >
          <SwiperSlide>Slide</SwiperSlide>
          <SwiperSlide>Slide</SwiperSlide>
          <SwiperSlide>Slide</SwiperSlide>
          <SwiperSlide>Slide</SwiperSlide>
          <SwiperSlide>Slide</SwiperSlide>
          <SwiperSlide>Slide</SwiperSlide>
          <SwiperSlide>Slide</SwiperSlide>
        </Swiper>
        <StartupCard />
      </S.Body>
    </S.Wrapper>
  );
};

export default BusinessSection;
