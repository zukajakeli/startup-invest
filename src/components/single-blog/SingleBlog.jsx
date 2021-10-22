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
import shareIcon from 'assets/icons/share-icon.svg';
import linkIcon from 'assets/icons/link-icon.svg';
import fbGreen from 'assets/icons/fb-green.svg';
import messengerIcon from 'assets/icons/messenger.svg';
import linkedinIcon from 'assets/icons/linkedin.svg';

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
      <S.Body>
        <S.ShareWrapper>
          <S.ShareText>გამოგვყევი:</S.ShareText>
          <S.IconsWrapper>
            <S.ShareIcon src={shareIcon} alt="icon" />
            <S.ShareIcon src={linkIcon} alt="icon" />
            <S.ShareIcon src={fbGreen} alt="icon" />
            <S.ShareIcon src={messengerIcon} alt="icon" />
            <S.ShareIcon src={linkedinIcon} alt="icon" />
          </S.IconsWrapper>
        </S.ShareWrapper>

        <S.MainImage
          src="https://929voice.fm/wp-content/uploads/sites/293/2020/10/young-adult-nathan-van-de-graaf-unsplash-2.jpg"
          alt="mainImage"
        />
        <S.Content>
          <S.Heading>
            შეუძლებელია ვერ შეამჩნიოთ რა ხდება საქართველოში ინოვაციებისა და
            მეწარმეობის
          </S.Heading>
          <S.SubHeading>
            ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
            მოყვა, ერთ ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და
            მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ერთ
            ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე
          </S.SubHeading>

          <S.SmallImage
            src="https://929voice.fm/wp-content/uploads/sites/293/2020/10/young-adult-nathan-van-de-graaf-unsplash-2.jpg"
            alt="smallImage"
          />

          <S.Text>
            ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
            მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე…
          </S.Text>

          <S.Text>
            ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
            მოყვა, ერთ ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და
            მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ერთ
            ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე
          </S.Text>

          <S.Text>
            ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
            მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე…
          </S.Text>

          <S.TextMarked>
            <span>
              <i>
                “ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას
                მეორე მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს
                მეორე”
              </i>
            </span>
          </S.TextMarked>

          <S.Text>
            ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
            მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე…
          </S.Text>

          <S.Text>
            ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
            მოყვა, ერთ ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და
            მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ერთ
            ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე
          </S.Text>

          <S.BulletTextWrapper>
            <S.GreenDot />
            <S.BulletText>
              ინოვაციებისა და მეწარმეობის მიმარერთ ორგანიზაციას მეორე მოყვა, ერთ
              ღონისძიებას
            </S.BulletText>
          </S.BulletTextWrapper>
          <S.BulletTextWrapper>
            <S.GreenDot />
            <S.BulletText>
              ინოვაციებისა და მეწარმეობის მიმარერთ ორგანიზაციას მეორე მოყვა, ერთ
              ღონისძიებას
            </S.BulletText>
          </S.BulletTextWrapper>
          <S.BulletTextWrapper>
            <S.GreenDot />
            <S.BulletText>
              ინოვაციებისა და მეწარმეობის მიმარერთ ორგანიზაციას მეორე მოყვა, ერთ
              ღონისძიებას
            </S.BulletText>
          </S.BulletTextWrapper>

          <S.Text>
            ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
            მოყვა, ერთ ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და
            მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ერთ
            ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე
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
  );
};

export default SingleBlog;
