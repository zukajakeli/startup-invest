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
import { useEffect } from 'react';
import { getMainStory, getSecondaryStories } from 'config/API';

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

  const [mainStory, setMainStory] = useState([]);
  const [secondaryStories, setSecondaryStories] = useState([]);
  useEffect(() => {
    getMainStory().then((res) => {
      console.log(res.data.story);
      setMainStory(res.data.story);
    });
  }, []);

  useEffect(() => {
    getSecondaryStories().then((res) => {
      console.log(res.data.stories);
      setSecondaryStories(res.data.stories);
    });
  }, []);

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
        {mainStory && (
          <MainStory
            image={mainStory.mainPhoto}
            readingTime={mainStory.readingTime}
            storyTitle={mainStory.title}
            storyPreview={mainStory.outsideText}
            _id={mainStory._id}
          />
        )}

        <S.BlogsContent>
          <S.Heading>ახალი ისტორიები</S.Heading>

          <Swiper
            spaceBetween={5}
            slidesPerView={
              isMobile
                ? 1.1
                : Math.floor(window.innerWidth / 260) - 0.5 > 4
                ? 4
                : 3.3
            }
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

          {secondaryStories && (
            <S.LargeStoriesWrapper>
              {secondaryStories.map(
                ({ _id, previewPhoto, outsideText, readingTime, title }) => {
                  return (
                    <S.ZindexTop>
                      <LargeStory
                        _id={_id}
                        backgroundImage={previewPhoto}
                        readingTime={readingTime}
                        storyTitle={title}
                        storyPreview={outsideText}
                      />
                    </S.ZindexTop>
                  );
                },
              )}

              <S.ArchBlueWrapper>
                {isMobile ? <ArchMobile /> : <Arch fill="#9AB7FF" />}
              </S.ArchBlueWrapper>
            </S.LargeStoriesWrapper>
          )}

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
