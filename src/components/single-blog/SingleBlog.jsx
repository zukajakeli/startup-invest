import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ReactPaginate from 'react-paginate';

import SubscribeOffer from 'components/common-components/subscribe-offer/SubscribeOffer';
import Footer from 'components/components/footer/Footer';
import Header from 'components/components/header/Header';
import SmallStory from 'components/components/small-story/SmallStory';
import { smallStoriesData } from 'components/common-components/SmallStoriesDummy';

import ovalYellow from 'assets/icons/oval-yellow.svg';
import ovalPink from 'assets/icons/oval-pink.svg';
import ovalYellowSmall from 'assets/icons/circle-yellow.svg';
import ovalPinkSmall from 'assets/icons/oval-pink-small.svg';
import { ReactComponent as PreviousButton } from 'assets/icons/previous-button.svg';
import { ReactComponent as NextButton } from 'assets/icons/next-button.svg';
import { ReactComponent as EllipsisButton } from 'assets/icons/ellipsis-button.svg';

import * as S from './single-blog-components';

const SingleBlog = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  const [pageNumber, setPageNumber] = useState(0);
  const storiesPerPage = 4;
  const storiesSeen = pageNumber * storiesPerPage;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayStories = smallStoriesData
    .slice(storiesSeen, storiesSeen + storiesPerPage)
    .map(({ image, readingTime, storyTitle, storyPreview }) => {
      return (
        <SmallStory
          image={image}
          readingTime={readingTime}
          storyTitle={storyTitle}
          storyPreview={storyPreview}
        />
      );
    });

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.Body>bodyy </S.Body>

      <S.OtherStories>
        <S.OtherHeading>სხვა ისტორიები</S.OtherHeading>
        <S.ZIndexTop>
          <S.SmallStoriesWrapper>{displayStories}</S.SmallStoriesWrapper>

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
        </S.ZIndexTop>

        <S.OvalYellow src={isMobile ? ovalYellowSmall : ovalYellow} />
        <S.OvalPink src={isMobile ? ovalPinkSmall : ovalPink} />
      </S.OtherStories>

      <S.SubscriptionWrapper>
        <SubscribeOffer
          cicrcleColor="#9AB7FF"
          arrowColor="#9AB7FF"
          inputColor="pink"
        />
      </S.SubscriptionWrapper>

      <Footer />
    </S.Wrapper>
  );
};

export default SingleBlog;
