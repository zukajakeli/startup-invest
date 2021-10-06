import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.css";
import "./swiper.css";

import StartupCard from "../startup-card/StartupCard";

import * as S from "./business-section-components";
import backgroundImage from "../../../assets/images/business-section-background.svg";

const BusinessSection = () => {
  SwiperCore.use([Pagination]);

  const startupsDummy = [
    {
      startupName: "სტარტაპ ინვესტ",
      goal: "$200,000",
      raised: "50%",
      startupInfo: `ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
               მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე`,
      image:
        "https://media.architecturaldigest.com/photos/5b9691509cd13621bf9b559b/16:9/w_2991,h_1682,c_limit/JPrice_Lamborghini_MCW18-1755.jpg",
      logo: "https://blh.com.ge/wp-content/uploads/2016/10/Apple-Logo-black.png",
    },
    {
      startupName: "სტარტაპ ინვესტ",
      goal: "$200,000",
      raised: "50%",
      startupInfo: `ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
                 მოყვა, ერთ ღონისძიებას მეორე, რთ ბიზნეს აქსელერატ რთ ბიზნეს აქსელერატ რთ ბიზნეს აქსელერატ რთ ბიზნეს აქსელერატ რთ ბიზნეს აქსელერატ რთ ბიზნეს აქსელერატ ერთ ბიზნეს აქსელერატორს მეორე…`,
      image:
        "https://media.architecturaldigest.com/photos/5b9691509cd13621bf9b559b/16:9/w_2991,h_1682,c_limit/JPrice_Lamborghini_MCW18-1755.jpg",
      logo: "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg",
    },
    {
      startupName: "სტარტაპ ინვესტ",
      goal: "$200,000",
      raised: "50%",
      startupInfo: `ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
                 მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე…`,
      image:
        "https://media.architecturaldigest.com/photos/5b9691509cd13621bf9b559b/16:9/w_2991,h_1682,c_limit/JPrice_Lamborghini_MCW18-1755.jpg",
      logo: "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg",
    },
    {
      startupName: "სტარტაპ ინვესტ",
      goal: "$200,000",
      raised: "50%",
      startupInfo: `ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
                   მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე…`,
      image: "https://live.staticflickr.com/4859/45540461915_9b0f6d1114_b.jpg",
      logo: "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg",
    },
  ];

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
          spaceBetween={16}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          direction="horizontal"
          pagination
        >
          {startupsDummy.map(
            (
              { startupName, goal, raised, startupInfo, image, logo },
              index
            ) => {
              return (
                <SwiperSlide key={`startup${index}`} style={{ width: "300px" }}>
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
            }
          )}
        </Swiper>
      </S.Body>
    </S.Wrapper>
  );
};

export default BusinessSection;
