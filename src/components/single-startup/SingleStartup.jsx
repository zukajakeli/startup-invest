import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
// import './swiper.css';

import { useFormik } from 'formik';
import ReactPaginate from 'react-paginate';

import SubscribeOffer from 'components/common-components/subscribe-offer/SubscribeOffer';
import Header from 'components/components/header/Header';
import StartupCard from 'components/components/startup-card/StartupCard';
import Footer from 'components/components/footer/Footer';

import { ReactComponent as YellowOval } from 'assets/icons/oval.svg';
import priceIcon from 'assets/icons/price-icon.svg';
import percentageIcon from 'assets/icons/percentage-icon.svg';
import blueArrow from 'assets/icons/arrow-blue.svg';
import { ReactComponent as PreviousButton } from 'assets/icons/previous-button.svg';
import { ReactComponent as NextButton } from 'assets/icons/next-button.svg';
import { ReactComponent as EllipsisButton } from 'assets/icons/ellipsis-button.svg';

import * as S from './single-startup-components';

import { startupsDummy } from 'components/common-components/StartupsDummyArray';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const SingleStartup = () => {
  SwiperCore.use([Pagination]);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  const [pageNumber, setPageNumber] = useState(0);
  const startupsPerPage = 3;
  const startupsSeen = pageNumber * startupsPerPage;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayStartups = startupsDummy
    .slice(startupsSeen, startupsSeen + startupsPerPage)
    .map(({ image, startupName, goal, raised, startupInfo, logo }) => {
      return (
        <StartupCard
          startupName={startupName}
          goal={goal}
          raised={raised}
          startupInfo={startupInfo}
          image={image}
          logo={logo}
        />
      );
    });

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>

      <S.Body>
        <S.LogoAndImage>
          <S.MainImage
            src="https://929voice.fm/wp-content/uploads/sites/293/2020/10/young-adult-nathan-van-de-graaf-unsplash-2.jpg"
            alt="main"
          />
          <S.Logo
            src="https://netrinoimages.s3.eu-west-2.amazonaws.com/2016/12/18/431639/135315/ferrari_logo_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_3016782_o.jpg"
            alt="logo"
          />
        </S.LogoAndImage>
        <S.Content>
          <S.Heading>სტარტაპის სახელი </S.Heading>
          <S.DataWrapper>
            <S.DataImage src={priceIcon} alt="price" />
            <S.SingleData>
              <S.DataName>წილის ღირებულება</S.DataName>
              <S.DataFigure>$200.000</S.DataFigure>
            </S.SingleData>

            <S.DataImage src={percentageIcon} alt="price" />
            <S.SingleData>
              <S.DataName>წილი</S.DataName>
              <S.DataFigure>50%</S.DataFigure>
            </S.SingleData>
          </S.DataWrapper>

          <S.PreviewText>
            ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
            მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე…
            ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
            მოყვა, ერთ ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და
            მეწარმეობის მიმართულებით
          </S.PreviewText>
        </S.Content>
        <S.HorizontalLine />

        <S.SubContent>
          <S.TextsWrapper>
            <S.SubHeading>
              ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
            </S.SubHeading>
            <S.Text large>
              ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
              მოყვა, ერთ ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და
              მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ერთ
              ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე
            </S.Text>
            <S.Text>
              ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
              მოყვა, ერთ ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და
              მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ერთ
              ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე
            </S.Text>
            <S.Text>
              ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
              მოყვა, ერთ ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და
              მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ერთ
              ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე
            </S.Text>
            <S.Text>
              ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
              მოყვა, ერთ ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და
              მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ერთ
              ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე
            </S.Text>
          </S.TextsWrapper>

          <S.VideoAndInfoWrapper>
            <video width="444" height="250" controls>
              <source
                src="https://www.youtube.com/watch?v=9NTrwrfI-X4"
                type="video/mp4"
              ></source>
            </video>
            <S.VideoText>ვიდეოს აღწერა</S.VideoText>
            {!isMobile && (
              <S.GetInfoWrapper>
                <S.GetInfoBox onSubmit={formik.handleSubmit}>
                  <S.BlueArrow src={blueArrow} alt="arrow" />

                  <S.GetInfoHeading>მოითხოვე ინფორმაცია</S.GetInfoHeading>
                  <S.GetInfoText>
                    მიიღე დეტალური ინფორმაცია სტარტაპის შესახებ
                  </S.GetInfoText>
                  <label htmlFor="email" />
                  <S.MailInput
                    placeholder="ელ-ფოსტა"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <S.GetInfoButton type="submit">მოითხოვნა</S.GetInfoButton>
                </S.GetInfoBox>
              </S.GetInfoWrapper>
            )}
          </S.VideoAndInfoWrapper>
        </S.SubContent>
      </S.Body>

      {isMobile && (
        <S.GetInfoWrapper>
          <S.GetInfoBox onSubmit={formik.handleSubmit}>
            <S.BlueArrow src={blueArrow} alt="arrow" />

            <S.GetInfoHeading>მოითხოვე ინფორმაცია</S.GetInfoHeading>
            <S.GetInfoText>
              მიიღე დეტალური ინფორმაცია სტარტაპის შესახებ
            </S.GetInfoText>
            <label htmlFor="email" />
            <S.MailInput
              placeholder="ელ-ფოსტა"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <S.GetInfoButton type="submit">მოთხოვნა</S.GetInfoButton>
          </S.GetInfoBox>
        </S.GetInfoWrapper>
      )}

      {!isMobile ? (
        <S.OtherOffersWrapper>
          <S.OtherHeading>სხვა შეთავაზებები</S.OtherHeading>
          <S.Flex>
            {startupsDummy.map(
              (
                { startupName, goal, raised, startupInfo, image, logo },
                index,
              ) => {
                return (
                  <StartupCard
                    key={`startup${index}`}
                    startupName={startupName}
                    goal={goal}
                    raised={raised}
                    startupInfo={startupInfo}
                    image={image}
                    logo={logo}
                  />
                );
              },
            )}
          </S.Flex>
          <S.OvalWrapper>
            <YellowOval fill="#FFCA0F" />
          </S.OvalWrapper>
        </S.OtherOffersWrapper>
      ) : (
        <S.OtherOffersWrapper>
          <S.OtherHeading>სხვა შეთავაზებები</S.OtherHeading>
          {displayStartups}
          <ReactPaginate
            previousLabel={<PreviousButton />}
            nextLabel={<NextButton />}
            pageCount={Math.ceil(startupsDummy.length / startupsPerPage)}
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
        </S.OtherOffersWrapper>
      )}

      <S.SubscribeWrapper>
        <SubscribeOffer
          cicrcleColor="#9AB7FF"
          arrowColor="#FDB8B7"
          inputColor="#FDB8B7"
        />
      </S.SubscribeWrapper>
      <Footer />
    </S.Wrapper>
  );
};

export default SingleStartup;
