import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ReactPaginate from 'react-paginate';
import { Helmet } from 'react-helmet';

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
import shareIcon from 'assets/icons/share-icon.svg';
import linkIcon from 'assets/icons/link-icon.svg';
import fbGreen from 'assets/icons/fb-green.svg';
import linkedinIcon from 'assets/icons/linkedin-icon.svg';

import * as S from './single-blog-components';
import { useEffect } from 'react';
import { getPaginatedStories, getSingleStory } from 'config/API';
import { useLocation, useParams, useRouteMatch } from 'react-router';
import BASE_URL from 'config/BaseUrl';

const SingleBlog = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const match = useRouteMatch();
  const { id } = useParams();
  const location = useLocation();
  console.log(location.pathname);

  const copyLink = () => {};

  const [storyData, setStoryData] = useState([]);
  useEffect(() => {
    getSingleStory(id).then((res) => {
      console.log(res.data.story);
      setStoryData(res.data.story);
    });
  }, []);

  const [pageNumber, setPageNumber] = useState(0);
  const storiesPerPage = 4;
  const storiesSeen = pageNumber * storiesPerPage;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [otherStoriesCount, setOtherStoriesCount] = useState([]);
  const [otherStories, setOtherStories] = useState([]);
  useEffect(() => {
    getPaginatedStories({ pageNumber, storiesPerPage }).then((res) => {
      setOtherStories(res.data.data);
      setOtherStoriesCount(res.data.totalCount);
      console.log(res.data.data);
    });
  }, [pageNumber]);

  const displayStories = otherStories.map(
    ({ previewPhoto, readingTime, title, outsideText, _id }) => {
      return (
        <SmallStory
          image={previewPhoto}
          readingTime={readingTime}
          storyTitle={title}
          storyPreview={outsideText}
          _id={_id}
        />
      );
    },
  );

  useEffect(() => {
    console.log('titleeee', storyData.title);
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute('content', storyData.title);
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute('content', storyData.outsideText);
    document
      .querySelector('meta[property="og:image"]')
      .setAttribute('content', storyData.mainPhoto);
    document
      .querySelector('meta[property="og:url"]')
      .setAttribute('content', BASE_URL + location.pathname);
  }, []);

  return (
    <>
      <Helmet>
        <title>{storyData.title}</title>
        <meta property="og:title" content={storyData.title} />
        <meta property="og:description" content={storyData.outsideText} />
        <meta property="og:image" content={storyData.mainPhoto} />
        <meta property="og:url" content={BASE_URL + location.pathname} />
      </Helmet>
      {storyData && (
        <S.Wrapper>
          <S.HeaderWrapper>
            <Header />
          </S.HeaderWrapper>
          <S.Body>
            <S.ShareWrapper>
              <S.ShareText>გამოგვყევი:</S.ShareText>
              <S.IconsWrapper>
                {isMobile && (
                  <S.ShareIcon onClick={copyLink} src={shareIcon} alt="icon" />
                )}

                <S.Pointer>
                  <S.ShareIcon src={linkIcon} alt="icon" />
                </S.Pointer>
                <a
                  className="share-event"
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://startupinvest.ge/${match.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.ShareIcon src={fbGreen} alt="icon" />
                </a>

                <a
                  href={`https://www.linkedin.com/cws/share?url=${BASE_URL}/${match.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.ShareIcon src={linkedinIcon} alt="icon" />
                </a>
              </S.IconsWrapper>
            </S.ShareWrapper>

            <S.MainImage src={`${storyData.mainPhoto}`} alt="mainImage" />
            <S.Content>
              <S.Heading>{storyData.title}</S.Heading>

              <S.Text>
                <div dangerouslySetInnerHTML={{ __html: storyData.mainText }} />
              </S.Text>
            </S.Content>
          </S.Body>

          <S.OtherStories>
            <S.OtherHeading>სხვა ისტორიები</S.OtherHeading>
            <S.ZIndexTop>
              <S.SmallStoriesWrapper>{displayStories}</S.SmallStoriesWrapper>

              <ReactPaginate
                previousLabel={<PreviousButton />}
                nextLabel={<NextButton />}
                pageCount={Math.ceil(otherStoriesCount / storiesPerPage)}
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

          <S.ZIndexTop>
            <S.BreakDiv />
          </S.ZIndexTop>

          <S.ZIndexTop>
            <S.SubscriptionWrapper>
              <SubscribeOffer
                cicrcleColor="#9AB7FF"
                arrowColor="#9AB7FF"
                inputColor="pink"
              />
            </S.SubscriptionWrapper>

            <Footer />
          </S.ZIndexTop>
        </S.Wrapper>
      )}{' '}
    </>
  );
};

export default SingleBlog;
