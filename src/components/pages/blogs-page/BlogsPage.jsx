import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import { useMediaQuery } from 'react-responsive';
import ReactPaginate from 'react-paginate';

import MainStory from '../../components/main-story/MainStory';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SubscribeOffer from '../../common-components/subscribe-offer/SubscribeOffer';
import CarousselStory from '../../components/caroussel-stories/CarousselStory';
import LargeStory from '../../components/large-story/LargeStory';
import SmallStory from '../../components/small-story/SmallStory';
import { smallStoriesData } from 'components/common-components/SmallStoriesDummy';

import ovalPink from '../../../assets/icons/oval-pink.svg';
import redCircle from '../../../assets/icons/circle-red-big.svg';
import { ReactComponent as Arch } from '../../../assets/icons/arch.svg';
import { ReactComponent as ArchMobile } from 'assets/icons/arch-blue-mobile.svg';
import { ReactComponent as PreviousButton } from 'assets/icons/previous-button.svg';
import { ReactComponent as NextButton } from 'assets/icons/next-button.svg';
import { ReactComponent as EllipsisButton } from 'assets/icons/ellipsis-button.svg';

import * as S from './blogs-page-components';
import './pagination.css';

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
    readingTime: '6 წუთი',
    storyPreview: `შეუძლებელია ვერ შეამჩნიოთ რა ხდება საქართველოში ინოვაციებისა და
მეწარმეობის`,
  },
];

const BlogsPage = () => {
  SwiperCore.use([Autoplay]);

  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  const [pageNumber, setPageNumber] = useState(0);
  const storiesPerPage = 6;
  const storiesSeen = pageNumber * storiesPerPage;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayStories = smallStoriesData
    .slice(storiesSeen, storiesSeen + storiesPerPage)
    .map(({ image, readingTime, storyTitle, storyPreview }) => {
      return (
        <S.ZindexTop>
          <SmallStory
            image={image}
            readingTime={readingTime}
            storyTitle={storyTitle}
            storyPreview={storyPreview}
          />
        </S.ZindexTop>
      );
    });
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

          <Swiper
            spaceBetween={5}
            slidesPerView={isMobile ? 1.1 : 4}
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
              {isMobile ? <ArchMobile /> : <Arch fill="#9AB7FF" />}
            </S.ArchBlueWrapper>
          </S.LargeStoriesWrapper>

          <S.AllStoriesWrapper>
            <S.Heading>სხვა ისტორიები</S.Heading>
            <S.SmallStoriesWrapper>
              {displayStories}

              <S.CircleRedWrapper src={redCircle} />
              <S.ArchYellowWrapper>
                <Arch fill="#FFCA0F" />
              </S.ArchYellowWrapper>
              <S.OvalPinkWrapper src={ovalPink} alt="oval" />
            </S.SmallStoriesWrapper>
            <ReactPaginate
              previousLabel={<PreviousButton />}
              nextLabel={<NextButton />}
              pageCount={Math.ceil(smallStoriesData.length / storiesPerPage)}
              pageRangeDisplayed={2}
              marginPagesDisplayed={0}
              breakLabel={<EllipsisButton />}
              onPageChange={changePage}
              containerClassName={
                isMobile ? 'paginationWrapperMobile' : 'paginationWrapper'
              }
              disabledClassName={'paginationDisabled'}
              activeClassName={'paginationActive'}
              pageLinkClassName={'paginationPage'}
            />
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
