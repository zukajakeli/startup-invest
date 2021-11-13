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

import { useContext } from 'react';
import { AuthDropdownContext } from 'contexts/AuthDropdownContext';
import { MeContext } from 'contexts/MeContext';
import SuccessMessage from './SuccessMessage';

import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { keys } from 'keys/keys';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { getSingleStartup } from 'config/API';
import BASE_URL from 'config/BaseUrl';

const SingleStartup = () => {
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] =
    useContext(AuthDropdownContext);
  const [meInfo, setMeInfo] = useContext(MeContext);
  const [isSuccessMessageOpen, setIsSuccessMessageOpen] = useState(false);

  SwiperCore.use([Pagination]);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      !meInfo
        ? setIsAuthDropdownOpen(true)
        : console.log(JSON.stringify(values, null, 2));
      setIsSuccessMessageOpen(true);
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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!meInfo) {
      setIsAuthDropdownOpen(true);
    } else {
      console.log(e.target.value);
      emailjs
        .sendForm(
          keys.emailJsServiceId,
          keys.templateId,
          e.target,
          keys.emailJsId,
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSuccessMessageOpen(true);
          },
          (error) => {
            console.log(error.text);
          },
        );
    }
  };

  const { id } = useParams();
  const [startupData, setStartupData] = useState([]);
  useEffect(() => {
    getSingleStartup(id).then((res) => {
      console.log('startup data', res.data.startup);
      setStartupData(res.data.startup);
    });
  }, []);

  const {
    mainPhoto,
    logoPhoto,
    video,
    sharePrice,
    share,
    title,
    previewText,
    mainText,
    category,
  } = startupData;

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>

      <S.Body>
        <S.LogoAndImage>
          <S.MainImage src={`${BASE_URL}/${mainPhoto}`} alt="main" />
          <S.Logo src={`${BASE_URL}/${logoPhoto}`} alt="logo" />
        </S.LogoAndImage>
        <S.Content>
          <S.Heading>{title} </S.Heading>
          <S.DataWrapper>
            <S.DataImage src={priceIcon} alt="price" />
            <S.SingleData>
              <S.DataName>წილის ღირებულება</S.DataName>
              <S.DataFigure>{sharePrice}</S.DataFigure>
            </S.SingleData>

            <S.DataImage src={percentageIcon} alt="price" />
            <S.SingleData>
              <S.DataName>წილი</S.DataName>
              <S.DataFigure>{share}</S.DataFigure>
            </S.SingleData>
          </S.DataWrapper>

          <S.PreviewText>{previewText}</S.PreviewText>
        </S.Content>
        <S.HorizontalLine />

        <S.SubContent>
          <S.TextsWrapper>
            <S.SubHeading>
              {/* ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე */}
            </S.SubHeading>

            <S.Text>
              <div dangerouslySetInnerHTML={{ __html: mainText }} />
            </S.Text>
          </S.TextsWrapper>

          <S.VideoAndInfoWrapper>
            <video width="444" height="250" controls>
              <source src={`${BASE_URL}/${video}`} type="video/mp4"></source>
            </video>
            <S.VideoText>ვიდეოს აღწერა</S.VideoText>
            <S.Line />
            {!isMobile && (
              <S.GetInfoWrapper>
                <S.GetInfoBox onSubmit={sendEmail} ref={form}>
                  {isSuccessMessageOpen ? (
                    <SuccessMessage />
                  ) : (
                    <>
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
                      />
                      <S.GetInfoButton type="submit">მოთხოვნა</S.GetInfoButton>{' '}
                    </>
                  )}
                </S.GetInfoBox>
              </S.GetInfoWrapper>
            )}
          </S.VideoAndInfoWrapper>
        </S.SubContent>
      </S.Body>

      {isMobile && (
        <S.GetInfoWrapper>
          <S.GetInfoBox onSubmit={sendEmail} ref={form}>
            <S.BlueArrow src={blueArrow} alt="arrow" />

            <S.GetInfoHeading>მოითხოვე ინფორმაცია</S.GetInfoHeading>
            <S.GetInfoText>
              მიიღე დეტალური ინფორმაცია სტარტაპის შესახებ
            </S.GetInfoText>
            <label htmlFor="email" />
            <S.MailInput placeholder="ელ-ფოსტა" name="email" id="email" />
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
