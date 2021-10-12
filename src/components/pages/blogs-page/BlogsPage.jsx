import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

import MainStory from '../../components/main-story/MainStory';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SubscribeOffer from '../../common-components/subscribe-offer/SubscribeOffer';
import CarousselStory from '../../components/caroussel-stories/CarousselStory';
import LargeStory from '../../components/large-story/LargeStory';
import SmallStory from '../../components/small-story/SmallStory';

import ovalPink from '../../../assets/icons/oval-pink.svg';
import redCircle from '../../../assets/icons/circle-red-big.svg';
import { ReactComponent as Arch } from '../../../assets/icons/arch.svg';

import * as S from './blogs-page-components';

const dummy = [
  {
    readingTime: '5 წუთი',
    storyPreview: `შეუძლებელია ვერ შეამჩნიოთ რა ხდება საქართველოში ინოვაციებისა და
მეწარმეობის`,
  },
  {
    readingTime: '5 წუთი',
    storyPreview: `შეუძლებელია ვერ შეამჩნიოთ რა ხდება საქართველოში ინოვაციებისა და
მეწარმეობის`,
  },
  {
    readingTime: '5 წუთი',
    storyPreview: `შეუძლებელია ვერ შეამჩნიოთ რა ხდება საქართველოში ინოვაციებისა და
მეწარმეობის`,
  },
  {
    readingTime: '5 წუთი',
    storyPreview: `შეუძლებელია ვერ შეამჩნიოთ რა ხდება საქართველოში ინოვაციებისა და
მეწარმეობის`,
  },
  {
    readingTime: '5 წუთი',
    storyPreview: `შეუძლებელია ვერ შეამჩნიოთ რა ხდება საქართველოში ინოვაციებისა და
მეწარმეობის`,
  },
  {
    readingTime: '6 წუთი',
    storyPreview: `შეუძლებელია ვერ შეამჩნიოთ რა ხდება საქართველოში ინოვაციებისა და
მეწარმეობის`,
  },
];

const BlogsPage = () => {
  SwiperCore.use([Autoplay]);
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>

      <S.Body>
        <MainStory
          image="https://resilientblog.co/wp-content/uploads/2020/02/quotes-about-mountains-1024x614.jpg"
          readingTime="7 წუთი"
          storyTitle="ბიზნეს ისტორიები"
          storyPreview="ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
          მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს "
        />

        <S.BlogsContent>
          <S.Heading>ახალი ისტორიები</S.Heading>

          <S.SwiperWrapper>
            <Swiper
              spaceBetween={5}
              slidesPerView={4}
              direction="horizontal"
              autoplay={{ delay: 3500 }}
            >
              {dummy.map(({ readingTime, storyPreview }, index) => {
                return (
                  <SwiperSlide key={`caroussel${index}`}>
                    <CarousselStory
                      readingTime={readingTime}
                      storyPreview={storyPreview}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </S.SwiperWrapper>

          <S.LargeStoriesWrapper>
            <S.ZindexTop>
              <LargeStory
                backgroundImage="https://resilientblog.co/wp-content/uploads/2020/02/quotes-about-mountains-1024x614.jpg"
                readingTime="4 წუთი"
                storyTitle="ბიზნეს ისტორიები"
                storyPreview="ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
        მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე…"
              />
            </S.ZindexTop>
            <S.ZindexTop>
              <LargeStory
                backgroundImage="https://resilientblog.co/wp-content/uploads/2020/02/quotes-about-mountains-1024x614.jpg"
                readingTime="4 წუთი"
                storyTitle="ბიზნეს ისტორიები"
                storyPreview="ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
          მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე…"
              />
            </S.ZindexTop>
            <S.ArchBlueWrapper>
              <Arch fill="#9AB7FF" />
            </S.ArchBlueWrapper>
          </S.LargeStoriesWrapper>

          <S.AllStoriesWrapper>
            <S.Heading>ყველა ისტორია</S.Heading>
            <S.SmallStoriesWrapper>
              <S.ZindexTop>
                <SmallStory
                  image="https://resilientblog.co/wp-content/uploads/2020/02/quotes-about-mountains-1024x614.jpg"
                  readingTime="7 წუთი"
                  storyTitle="ბიზნეს ისტორიები"
                  storyPreview="ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
          მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს "
                />
              </S.ZindexTop>
              <S.ZindexTop>
                <SmallStory
                  image="https://resilientblog.co/wp-content/uploads/2020/02/quotes-about-mountains-1024x614.jpg"
                  readingTime="7 წუთი"
                  storyTitle="ბიზნეს ისტორიები"
                  storyPreview="ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
          მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს "
                />
              </S.ZindexTop>
              <S.ZindexTop>
                <SmallStory
                  image="https://resilientblog.co/wp-content/uploads/2020/02/quotes-about-mountains-1024x614.jpg"
                  readingTime="7 წუთი"
                  storyTitle="ბიზნეს ისტორიები"
                  storyPreview="ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
          მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს "
                />
              </S.ZindexTop>
              <S.ZindexTop>
                <SmallStory
                  image="https://resilientblog.co/wp-content/uploads/2020/02/quotes-about-mountains-1024x614.jpg"
                  readingTime="7 წუთი"
                  storyTitle="ბიზნეს ისტორიები"
                  storyPreview="ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
          მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს "
                />
              </S.ZindexTop>
              <S.ZindexTop>
                <SmallStory
                  image="https://resilientblog.co/wp-content/uploads/2020/02/quotes-about-mountains-1024x614.jpg"
                  readingTime="7 წუთი"
                  storyTitle="ბიზნეს ისტორიები"
                  storyPreview="ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
          მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს "
                />
              </S.ZindexTop>
              <S.ZindexTop>
                <SmallStory
                  image="https://resilientblog.co/wp-content/uploads/2020/02/quotes-about-mountains-1024x614.jpg"
                  readingTime="7 წუთი"
                  storyTitle="ბიზნეს ისტორიები"
                  storyPreview="ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
          მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს "
                />
              </S.ZindexTop>

              <S.CircleRedWrapper src={redCircle} />
              <S.ArchYellowWrapper>
                <Arch fill="#FFCA0F" />
              </S.ArchYellowWrapper>
              <S.OvalPinkWrapper src={ovalPink} alt="oval" />
            </S.SmallStoriesWrapper>
          </S.AllStoriesWrapper>
        </S.BlogsContent>

        <S.SubscriptionWrapper>
          <SubscribeOffer
            inputColor="#55AA79"
            arrowColor="#FDB8B7"
            cicrcleColor="#FDB8B7"
          />
        </S.SubscriptionWrapper>
      </S.Body>

      <Footer />
    </S.Wrapper>
  );
};

export default BlogsPage;
