import { useMediaQuery } from 'react-responsive';

import SubscribeOffer from 'components/common-components/subscribe-offer/SubscribeOffer';
import Footer from 'components/components/footer/Footer';
import Header from 'components/components/header/Header';
import { getAllAbouts } from 'config/API';

import { ReactComponent as LinkedinIcon } from '../../../assets/icons/linkedin-icon.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icons/instagram-icon.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/icons/facebook-icon.svg';

import * as S from './about-us-page-components';
import { useEffect } from 'react';
import { useState } from 'react';
import BASE_URL from 'config/BaseUrl';

const AboutUsPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  const [aboutData, setAboutData] = useState(null);
  useEffect(() => {
    getAllAbouts().then((res) => {
      console.log(res.data[0]);
      setAboutData(res.data[0]);
    });
  }, []);

  // const { text, photoOne, photoTwo } = aboutData;

  return (
    <>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.Wrapper>
        {aboutData && (
          <S.Body>
            <S.TextsWrapper>
              <S.Heading>ჩვენ შესახებ</S.Heading>
              <S.Text>
                <div dangerouslySetInnerHTML={{ __html: aboutData.text }} />
              </S.Text>

              {isMobile && (
                <S.Image src={`${aboutData.photoOne}`} alt="about-us" />
              )}
            </S.TextsWrapper>
            <S.ImagesWrapper>
              {!isMobile && (
                <S.Image src={`${aboutData.photoOne}`} alt="about-us" />
              )}

              {aboutData.photoTwo && (
                <S.Image src={`${aboutData.photoTwo}`} alt="about-us" />
              )}

              <S.FollowWrapper>
                <S.FollowText>გამოგვყევი:</S.FollowText>
                <S.FollowIcons>
                  <InstagramIcon />
                  <FacebookIcon />
                  <LinkedinIcon />
                </S.FollowIcons>
              </S.FollowWrapper>
            </S.ImagesWrapper>
          </S.Body>
        )}

        <S.SubscribeWrapper>
          <SubscribeOffer
            cicrcleColor="#55AA79"
            arrowColor="#55AA79"
            inputColor="#FE7760"
          />
        </S.SubscribeWrapper>
        <Footer />
      </S.Wrapper>
    </>
  );
};

export default AboutUsPage;
