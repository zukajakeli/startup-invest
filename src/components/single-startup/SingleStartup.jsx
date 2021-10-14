import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
// import './swiper.css';

import { useFormik } from 'formik';

import SubscribeOffer from 'components/common-components/subscribe-offer/SubscribeOffer';
import Header from 'components/components/header/Header';
import StartupCard from 'components/components/startup-card/StartupCard';
import Footer from 'components/components/footer/Footer';

import { ReactComponent as YellowOval } from 'assets/icons/oval.svg';
import priceIcon from 'assets/icons/price-icon.svg';
import percentageIcon from 'assets/icons/percentage-icon.svg';
import blueArrow from 'assets/icons/arrow-blue.svg';

import * as S from './single-startup-components';

import { startupsDummy } from 'components/common-components/StartupsDummyArray';

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
          <S.Heading>სტარტაპის სახელი</S.Heading>
          <S.DataWrapper>
            <S.DataImage src={priceIcon} alt="price" />
            <S.SingleData>
              <S.DataName>ღირებულება</S.DataName>
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
          </S.VideoAndInfoWrapper>
        </S.SubContent>
      </S.Body>

      <S.OtherOffersWrapper>
        <S.OtherHeading>სხვა შეთავაზებები</S.OtherHeading>
        <Swiper
          spaceBetween={10}
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

        <S.OvalWrapper>
          <YellowOval fill="#FFCA0F" />
        </S.OvalWrapper>
      </S.OtherOffersWrapper>

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
